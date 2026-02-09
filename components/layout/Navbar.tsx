"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useState, useEffect, useCallback } from "react";

// Scramble/Decode text effect component
const ScrambleText = ({
    text,
    isActive,
    delay = 0,
    className = ""
}: {
    text: string;
    isActive: boolean;
    delay?: number;
    className?: string;
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const scramble = useCallback(() => {
        if (!isActive) {
            setDisplayText(text);
            return;
        }

        setIsAnimating(true);
        let iteration = 0;
        const totalIterations = text.length;
        const intervalTime = 40;

        const interval = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            iteration += 1/3;

            if (iteration >= totalIterations) {
                clearInterval(interval);
                setDisplayText(text);
                setIsAnimating(false);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [isActive, text, chars]);

    useEffect(() => {
        if (isActive) {
            const timeout = setTimeout(scramble, delay);
            return () => clearTimeout(timeout);
        } else {
            setDisplayText(text);
        }
    }, [isActive, delay, scramble, text]);

    return (
        <span className={`font-mono ${className}`}>
            {displayText}
        </span>
    );
};

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Our Mission", href: "/our-mission" },
        { label: "Columbus Market Spy", href: "/market-spy" },
        { label: "MapsGPT", href: "/maps-gpt" },
        { label: "Technology", href: "#" },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
        >
            {/* Backdrop Blur Effect */}
            <div
                className={`fixed top-20 left-0 right-0 bottom-0 bg-black/10 backdrop-blur-sm z-[-1] pointer-events-none transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 bg-white">
                <div className="flex items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center mr-auto">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logobueno.png"
                                    alt="Columbus Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-2xl font-bold text-primary tracking-tight">Columbus Earth</span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8 mr-8">
                        <Link href="#" className="text-gray-900 font-bold hover:text-primary transition-colors">
                            Product
                        </Link>
                        <Link href="#" className="text-gray-900 font-bold hover:text-primary transition-colors">
                            Use Cases
                        </Link>
                        <Link href="#" className="text-gray-900 font-bold hover:text-primary transition-colors">
                            Technology
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="primary" className="bg-black text-primary border border-gray-200 hover:bg-gray-50 rounded-md px-6 font-medium">
                            Start Now
                        </Button>
                        <button
                            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mega Menu Dropdown - Slower smooth slide down */}
            <div
                className={`absolute top-full left-0 right-0 bg-white shadow-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isMenuOpen
                        ? "max-h-[600px] opacity-100 border-b border-gray-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div
                    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isMenuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: isMenuOpen ? "150ms" : "0ms" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                        {/* Column 1: Description */}
                        <div
                            className={`md:col-span-5 space-y-8 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isMenuOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-6 opacity-0"
                            }`}
                            style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
                        >
                            <div>
                                <h4 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">
                                    <ScrambleText
                                        text="COLUMBUS EARTH"
                                        isActive={isMenuOpen}
                                        delay={300}
                                    />
                                </h4>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                    Columbus Earth Inc. is a spatial frontier AI company building the first production Large Geospatial Model to answer the most difficult questions about our planet.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2">
                                        <ScrambleText
                                            text="CONTACT"
                                            isActive={isMenuOpen}
                                            delay={450}
                                        />
                                    </h4>
                                    <a href="mailto:contact@columbus.earth" className="text-gray-900 hover:text-primary font-medium block transition-colors">contact@columbus.earth</a>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2">
                                        <ScrambleText
                                            text="SOCIAL"
                                            isActive={isMenuOpen}
                                            delay={550}
                                        />
                                    </h4>
                                    <a href="#" className="text-gray-900 hover:text-primary font-medium block transition-colors">LinkedIn</a>
                                </div>
                            </div>
                        </div>

                        {/* Spacer */}
                        <div className="md:col-span-3"></div>

                        {/* Column 2: Company Links with Stagger Animation */}
                        <div className="md:col-span-4 space-y-6">
                            <h4
                                className={`text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                    isMenuOpen
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-4 opacity-0"
                                }`}
                                style={{ transitionDelay: isMenuOpen ? "250ms" : "0ms" }}
                            >
                                <ScrambleText
                                    text="COMPANY"
                                    isActive={isMenuOpen}
                                    delay={400}
                                />
                            </h4>
                            <ul className="space-y-4">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={item.href}
                                        className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                            isMenuOpen
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-6 opacity-0"
                                        }`}
                                        style={{
                                            transitionDelay: isMenuOpen
                                                ? `${350 + index * 80}ms`
                                                : "0ms"
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="group text-xl font-medium text-gray-900 hover:text-primary block transition-all duration-300 flex items-center"
                                        >
                                            <span className="mr-2">+</span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="h-8 bg-gradient-to-b from-white to-transparent opacity-50"></div>
            </div>
        </nav>
    );
};
