"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { chatWithColumbus } from "@/lib/agent";

export const ChatBar = ({ forcedInput, variant = "fixed" }: { forcedInput?: string, variant?: "fixed" | "inline" }) => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        if (forcedInput) {
            setInput(forcedInput);
        }
    }, [forcedInput]);

    useEffect(() => {
        if (variant === "inline") return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const footer = document.querySelector("footer");
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) observer.unobserve(footer);
        };
    }, [variant]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setIsLoading(true);
        try {
            console.log("Sending message:", input);
            const response = await chatWithColumbus(input);
            console.log("Response:", response);
            alert(response);
            setInput("");
        } catch (error) {
            console.error("Error chatting:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (variant === "inline") {
        return (
            <div className="w-full my-4 z-40">
                <div className="w-full bg-white border border-gray-200 shadow-sm rounded-xl p-2 flex items-center gap-2 ring-1 ring-black/5">
                    <div className="pl-2 text-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                    </div>
                    <form onSubmit={handleSubmit} className="flex-1 flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask Columbus..."
                            className="w-full bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-500 text-sm py-2 px-2 outline-none"
                            disabled={isLoading}
                        />
                    </form>
                    <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        className="rounded-lg px-4 bg-primary text-white hover:bg-primary/90 text-xs py-1.5 h-auto"
                        disabled={isLoading || !input.trim()}
                        onClick={(e) => handleSubmit(e)}
                    >
                        {isLoading ? "..." : "Ask"}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`fixed left-0 right-0 z-40 px-4 flex justify-center transition-all duration-300 ease-in-out
                ${isFooterVisible ? "bottom-32" : "bottom-8"}
            `}
        >
            <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-full p-2 flex items-center gap-2 ring-1 ring-black/5">
                <div className="pl-4 text-primary">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-pulse"
                    >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                </div>

            </div>
        </div>
    );
};
