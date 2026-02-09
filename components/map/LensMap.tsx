"use client";

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN } from "@/lib/map-config";

mapboxgl.accessToken = MAPBOX_TOKEN;

interface LensMapProps {
    isHovered: boolean;
    className?: string;
    center?: [number, number];
    initialZoom?: number;
    hoverZoom?: number;
}

export const LensMap: React.FC<LensMapProps> = ({
    isHovered,
    className = "absolute inset-0 w-full h-full",
    center = [2.166, 41.3931], // Barcelona
    initialZoom = 12,
    hoverZoom = 15
}) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    // Initialize Map
    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/satellite-streets-v12', // Or navigate/satellite depending on look
            center: center,
            zoom: initialZoom,
            pitch: 0, // 3D view
            bearing: -20,
            interactive: false, // Disable all user interaction
            attributionControl: false
        });

        mapRef.current = map;

        map.on('style.load', () => {
            // Standard style configuration for 3D buildings if needed, or keeping it clean
            map.setConfigProperty('basemap', 'lightPreset', 'day');
        });

        return () => {
            map.remove();
        };
    }, []); // Run once on mount

    // Handle Hover Zoom Effect
    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;

        if (isHovered) {
            map.flyTo({
                zoom: hoverZoom,
                duration: 1500, // Slower, smoother zoom
                essential: true,
                curve: 1 // Linear-ish zoom
            });
        } else {
            map.flyTo({
                zoom: initialZoom,
                duration: 1500,
                essential: true
            });
        }
    }, [isHovered, hoverZoom, initialZoom]);

    return (
        <div ref={mapContainerRef} className={className} />
    );
};
