export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export const INITIAL_VIEW_STATE = {
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 10.5,
    pitch: 45,
    bearing: 0,
};

// Define the chapter names matching IDs in the DOM
export type ChapterId = 'home' | 'services' | 'products' | 'spy-intro' | 'spy-analysis' | 'spy-traffic' | 'gpt-intro' | 'gpt-features' | 'gpt-how' | 'spy-dashboard' | 'mission';

interface Chapter {
    duration: number;
    center: [number, number];
    zoom: number;
    pitch: number;
    bearing: number;
}

export const CHAPTERS: Record<ChapterId, Chapter> = {
    home: {
        duration: 3000,
        center: [139.7000, 35.6595] as [number, number], // Shibuya Crossing
        zoom: 15.5,
        pitch: 55,
        bearing: -20,
    },
    services: {
        duration: 3000,
        center: [139.7454, 35.6586] as [number, number], // Tokyo Tower
        zoom: 16,
        pitch: 60,
        bearing: 15,
    },
    products: {
        duration: 3000,
        center: [139.7760, 35.6320] as [number, number], // Tokyo Coastal / Odaiba / Bay
        zoom: 15.5,
        pitch: 50,
        bearing: 45,
    },
    // Market Spy Page Chapters - Commercial Hubs
    // Market Spy Page Chapters - Commercial Hubs (Madrid)
    'spy-intro': {
        duration: 7000,
        center: [-3.6930, 40.4510] as [number, number], // AZCA (Financial District)
        zoom: 16,
        pitch: 50,
        bearing: -10,
    },
    'spy-analysis': {
        duration: 7000,
        center: [-3.6830, 40.4290] as [number, number], // Barrio de Salamanca (Retail)
        zoom: 16.5,
        pitch: 45,
        bearing: 20,
    },
    'spy-traffic': {
        duration: 7000,
        center: [-3.7050, 40.4200] as [number, number], // Gran Vía (Busy)
        zoom: 16.5,
        pitch: 60,
        bearing: -15,
    },
    'spy-dashboard': {
        duration: 0, // Instant
        center: [-3.6880, 40.4260] as [number, number], // Serrano / Salamanca (Dashboard View)
        zoom: 16,
        pitch: 50,
        bearing: 45,
    },
    // MapsGPT Page Chapters
    'gpt-intro': {
        duration: 4000,
        center: [0, 20] as [number, number], // Earth View
        zoom: 1.5,
        pitch: 0,
        bearing: 0,
    },
    'gpt-features': {
        duration: 3000,
        center: [-0.1246, 51.5007] as [number, number], // Big Ben & London Eye View
        zoom: 16,
        pitch: 60,
        bearing: 60,
    },
    'gpt-how': {
        duration: 3000,
        center: [-0.1340, 51.5135] as [number, number], // Soho, London (Dining/Nightlife)
        zoom: 16,
        pitch: 40,
        bearing: 0,
    },
    'mission': {
        duration: 0,
        center: [0, 20] as [number, number], // Earth view
        zoom: 1.5,
        pitch: 0,
        bearing: 0,
    }
};
