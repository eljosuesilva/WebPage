"use client";

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN, CHAPTERS, ChapterId } from "@/lib/map-config";

mapboxgl.accessToken = MAPBOX_TOKEN;

// Define Marker interface
export interface MapMarker {
    id: string;
    latitude: number;
    longitude: number;
    label: string;
    logoUrl?: string; // Path to logo image
}

interface MapBackgroundProps {
    markers?: MapMarker[];
    initialChapter?: ChapterId;
    className?: string;
    interactive?: boolean;
    onMarkerClick?: (marker: MapMarker) => void;
    focusedMarker?: MapMarker | null;
    mapStyle?: string;
}

export const MapBackground: React.FC<MapBackgroundProps> = ({
    markers = [],
    initialChapter = 'home',
    className = "fixed inset-0 w-full h-full -z-10",
    interactive = false,
    onMarkerClick,
    focusedMarker,
    mapStyle = 'mapbox://styles/mapbox/standard'
}) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const activeChapterRef = useRef<ChapterId>(initialChapter);
    const markersRef = useRef<mapboxgl.Marker[]>([]);

    const [mapLoaded, setMapLoaded] = React.useState(false);

    // Fly to focused marker
    useEffect(() => {
        if (!mapRef.current || !focusedMarker || !mapLoaded) return;

        mapRef.current.flyTo({
            center: [focusedMarker.longitude, focusedMarker.latitude],
            zoom: 17,
            pitch: 60,
            bearing: -20,
            duration: 2000,
            essential: true
        });
    }, [focusedMarker, mapLoaded]);

    // Handle Markers Updates
    useEffect(() => {
        const map = mapRef.current;
        if (!map || !mapLoaded) return;


        // Clear existing markers
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];

        // Add new markers
        markers.forEach((marker) => {
            const el = document.createElement('div');
            el.className = 'marker-custom';
            if (interactive) {
                el.style.cursor = 'pointer';
            }

            el.innerHTML = `
                <div class="flex flex-col items-center">
                    <div class="bg-white px-3 py-2 rounded-lg shadow-lg mb-2 text-xs font-bold text-gray-800 whitespace-nowrap flex items-center gap-2 transform transition-transform hover:scale-105">
                        ${marker.logoUrl ? `<img src="${marker.logoUrl}" class="w-4 h-4 object-contain" />` : ''}
                        ${marker.label}
                    </div>
                    <div class="w-3 h-3 bg-white rotate-45 transform -mt-3 shadow-sm"></div>
                </div>
            `;

            el.addEventListener('click', (e) => {
                e.stopPropagation();
                onMarkerClick?.(marker);
            });

            const newMarker = new mapboxgl.Marker(el)
                .setLngLat([marker.longitude, marker.latitude])
                .addTo(map);

            markersRef.current.push(newMarker);
        });
    }, [markers, interactive, mapLoaded]); // Re-run when map is ready or markers change

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: mapStyle,
            center: CHAPTERS[initialChapter].center,
            zoom: CHAPTERS[initialChapter].zoom,
            pitch: CHAPTERS[initialChapter].pitch,
            bearing: CHAPTERS[initialChapter].bearing,
            interactive: interactive,
            antialias: true
        });

        mapRef.current = map;

        map.on('style.load', () => {
            map.setConfigProperty('basemap', 'lightPreset', 'day');
            map.setProjection('globe');
            setMapLoaded(true);
            // Trigger marker effect manually once map is loaded if needed, 
            // though the dependency array on the other effect should handle it 
            // once mapRef is executing. 
            // Actually, we need to force a re-render or check if the other effect 
            // runs after mapRef is assigned. React refs don't trigger re-renders.
            // We can just rely on the markers prop or set a loaded state.
            // For now, let's just trigger the marker update by passing 'map' to a state if we wanted to be 100% pure,
            // but in this imperative integration, simply ensuring the other effect runs is key.
            // Since the other effect depends on [markers], and markers likely won't change *exactly* when map loads,
            // we might miss the initial paint.
        });

        const isElementOnScreen = (id: ChapterId) => {
            const el = document.getElementById(id);
            if (!el) return false;
            const bounds = el.getBoundingClientRect();
            return bounds.top < window.innerHeight && bounds.bottom > 0;
        };

        const setActiveChapter = (chapterName: ChapterId) => {
            if (!mapRef.current) return;
            if (chapterName === activeChapterRef.current) return;

            mapRef.current.flyTo(CHAPTERS[chapterName]);

            activeChapterRef.current = chapterName;
        };

        const onScroll = () => {
            (Object.keys(CHAPTERS) as ChapterId[]).forEach((chapterName) => {
                if (isElementOnScreen(chapterName)) {
                    setActiveChapter(chapterName);
                }
            });
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            map.remove();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`${className} bg-gray-200`}>
            <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};
