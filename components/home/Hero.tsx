import { Button } from "@/components/ui/Button";
import { Database, Brain, Grid, File, FileText } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Column: Text & Navigation */}
                <div className="flex flex-col gap-12">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black tracking-tight">
                            Building a brain for earth.
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-800 max-w-lg leading-relaxed">
                            At Columbus, we want to collect the world&apos;s data, and build a brain that comprehends it all.
                        </p>
                        <p className="text-neutral-600 font-mono text-sm max-w-lg">
                            We&apos;re building frontier geospatial intelligence. It&apos;s pretty cool.
                        </p>
                    </div>

                    {/* Navigation List */}
                    <div className="flex flex-col gap-4 relative">
                        {/* Decorative Vertical Lines */}
                        <div className="absolute left-0 top-0 bottom-0 flex gap-2 w-4">
                            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-red-300 to-transparent opacity-50"></div>
                            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-50"></div>
                        </div>

                        <div className="pl-8 space-y-4">
                            {['Index', 'An LGM vs LLM', 'Data Collection', 'Our Database architecture', 'Reasoning with space and geography', 'Blog', 'Careers'].map((item, i) => (
                                <div key={i} className="text-neutral-700 hover:text-black hover:font-medium cursor-pointer transition-colors text-base">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Diagram */}
                <div className="relative flex flex-col items-center justify-center p-8">
                    {/* Data Collection Section */}
                    <div className="flex flex-col items-center gap-8 w-full">
                        <h3 className="text-xl font-semibold text-neutral-900">Data Collection</h3>

                        {/* Files Row */}
                        <div className="flex justify-center gap-4 md:gap-6">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <div key={i} className="w-12 h-14 md:w-14 md:h-16 border border-neutral-400 rounded-md bg-white shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform">
                                    {/* Empty placeholder like wireframe */}
                                </div>
                            ))}
                        </div>

                        {/* Connecting Lines (Visual only - Simplified with SVG or CSS) */}
                        <div className="w-full h-16 relative overflow-hidden translate-x-20">
                            <svg className="absolute inset-0 w-full h-full" overflow="visible">
                                <path d="M60,0 Q100,60 180,60" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                                <path d="M120,0 Q140,50 180,60" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                                <path d="M180,0 L180,60" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                                <path d="M240,0 Q220,50 180,60" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                                <path d="M300,0 Q260,60 180,60" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />

                                {/* Vertical line down to DB */}
                                <line x1="180" y1="60" x2="180" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                            </svg>
                        </div>

                        {/* Database */}
                        <div className="flex flex-col items-center gap-2 z-10">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg text-white">
                                <Database size={32} />
                            </div>
                            <span className="font-semibold text-neutral-900">Columbus Database</span>
                        </div>

                        {/* Split connections */}
                        <div className="w-64 h-12 relative">
                            <svg className="absolute inset-0 w-full h-full" overflow="visible">
                                {/* Left connection */}
                                <path d="M128,0 L128,20 L64,20 L64,48" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                                {/* Right connection */}
                                <path d="M128,0 L128,20 L192,20 L192,48" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                            </svg>
                        </div>


                        {/* Brain & Grid Row */}
                        <div className="flex justify-between w-64 md:w-80">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-20 h-20 relative bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                                    {/* Placeholder or image for Brain */}
                                    <Brain className="text-neutral-500" size={40} />
                                </div>
                                <span className="font-medium">Brain</span>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="w-20 h-20 relative bg-blue-50 rounded-lg overflow-hidden flex items-center justify-center shadow-md border border-blue-100">
                                    {/* Placeholder for Grid */}
                                    <Grid className="text-blue-500" size={40} />
                                </div>
                                <span className="font-medium">Grid</span>
                            </div>
                        </div>

                        {/* Final Link */}
                        <div className="h-12 w-[1px] border-l border-dashed border-neutral-400"></div>

                        <div className="text-center">
                            <p className="font-bold text-lg text-neutral-900">Insights, Patterns, Answers.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Blur Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF9] to-transparent z-0 pointer-events-none"></div>
        </section>
    );
};
