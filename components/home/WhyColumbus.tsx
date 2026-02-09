"use client";

import { useState } from 'react';
import { LensMap } from '@/components/map/LensMap';

export const WhyColumbus = () => {
    const [isLensHovered, setIsLensHovered] = useState(false);
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="why-columbus">

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="/heropage.png"
                    alt="Columbus Interface"
                    className="w-full h-full object-cover opacity-100 blur-[1px]"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px'
                    }}>
                </div>
            </div>

            {/* Top Blur Gradient (from Hero) */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FAFAF9] to-transparent z-1 pointer-events-none"></div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-24">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side */}
                    <div className="flex flex-col justify-center h-full">
                        <div className="max-w-xl">
                            <h3 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-8">
                                Introducing Columbus. The most powerful platform, to explore your next frontier.
                            </h3>
                        </div>

                        <div className="space-y-8 z-4 mb-12">
                            <p className="text-4xl text-white font-normal max-w-md">
                                We enable you to do location-based research differently.
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors w-max">
                                Explore Columbus
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Highlight Box */}
                    <div
                        className="hidden md:flex flex-col justify-center items-center relative"
                        onMouseEnter={() => setIsLensHovered(true)}
                        onMouseLeave={() => setIsLensHovered(false)}
                    >
                        <div className="relative w-80 h-80 border-2 border-white flex items-center justify-center overflow-hidden shadow-2xl bg-black group/lens cursor-crosshair transform translate-x-9 translate-y-7">
                            {/* Live Mapbox Lens */}
                            <LensMap
                                isHovered={isLensHovered}
                                className="absolute inset-0 w-full h-full transform scale-150"
                            />

                            {/* Crosshair/Grid for Lens */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                                    backgroundSize: '32px 32px'
                                }}>
                            </div>
                        </div>
                        <div className="mt-8 text-center sm:text-left">
                            <p className="text-2xl text-white font-normal mb-2">Find your targets in seconds.</p>
                            <p className="text-2xl text-white/70 font-normal">Find the unfound.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Blur Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAF9] to-transparent z-1 pointer-events-none"></div>
        </section>
    );
};
