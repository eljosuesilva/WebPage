import Image from "next/image";

export const Services = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/terra.png"
                    alt="Terra Background"
                    fill
                    className="object-cover"
                    priority
                />
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center">

                {/* Headline */}
                <div className="mb-8">
                    <h2 className="text-4xl md:text-6xl font-normal text-white max-w-2xl leading-tight">
                        The Aggregated <br />
                        Geospatial Database.
                    </h2>
                </div>

                {/* Placeholder Boxes */}
                <div className="flex gap-4 mb-8">
                    <div className="w-32 h-32 md:w-48 md:h-48 border border-white/50 backdrop-blur-sm rounded-lg"></div>
                    <div className="w-32 h-32 md:w-48 md:h-48 border border-white/50 backdrop-blur-sm rounded-lg"></div>
                </div>

                {/* Subtext */}
                <div className="max-w-2xl">
                    <p className="text-xl md:text-2xl text-white/90">
                        We turn earth into an intelligence hub for your <br className="hidden md:block" />
                        research and decision making.
                    </p>
                </div>

            </div>

            {/* Bottom Blur Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAF9] to-transparent z-1 pointer-events-none"></div>
        </section>
    );
};
