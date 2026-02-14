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
    const hasMapToken = MAPBOX_TOKEN.trim().length > 0;

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
    }, [markers, interactive, mapLoaded, onMarkerClick]); // Re-run when map is ready or markers change

    useEffect(() => {
        if (!mapContainerRef.current || !hasMapToken) return;

        let map: mapboxgl.Map | null = null;
        try {
            map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: mapStyle,
                center: CHAPTERS[initialChapter].center,
                zoom: CHAPTERS[initialChapter].zoom,
                pitch: CHAPTERS[initialChapter].pitch,
                bearing: CHAPTERS[initialChapter].bearing,
                interactive: interactive,
                antialias: true
            });
        } catch (error) {
            console.error("Failed to initialize WebGL", error);
            return;
        }

        mapRef.current = map;

        const onMapError = (event: mapboxgl.ErrorEvent) => {
            console.error("Mapbox runtime error", event.error);
        };

        map.on("error", onMapError);

        map.on('style.load', () => {
            try {
                map.setConfigProperty('basemap', 'lightPreset', 'day');
                map.setProjection('globe');
            } catch (error) {
                console.error("Failed to configure map style", error);
            }
            setMapLoaded(true);
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
            map.off("error", onMapError);
            map.remove();
            mapRef.current = null;
            markersRef.current = [];
            setMapLoaded(false);
        };
    }, [hasMapToken, initialChapter, interactive, mapStyle]);

    if (!hasMapToken) {
        return (
            <div
                className={`${className} bg-[radial-gradient(circle_at_28%_18%,#b7d4f2_0%,#d2e2f3_30%,#e9edf2_70%,#f3f4f6_100%)]`}
                aria-hidden="true"
            />
        );
    }

    return (
        <div className={`${className} bg-gray-200`}>
            <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};
