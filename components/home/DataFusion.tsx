import Image from "next/image";

export const DataFusion = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="data-fusion">

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/forest.png"
                    alt="Forest Background"
                    fill
                    className="object-cover"
                    priority
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

            {/* Top Blur Gradient */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FAFAF9] to-transparent z-1 pointer-events-none"></div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-24">

                {/* Headline */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-normal text-white max-w-4xl leading-tight -mt-40">
                        The Columbus Aggregated Geospatial Data system <br className="hidden md:block" />
                        fuses versatile data sources into one coherent picture.
                    </h2>
                </div>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

                    {/* Column 1: Public Data */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl text-white font-normal">Public Data</h3>
                        <div className="aspect-square w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg overflow-hidden relative group">
                            {/* Placeholder for images shown in reference */}
                            <div className="absolute inset-2 top-4 left-4 right-8 bottom-8 bg-white shadow-lg transform -rotate-3 transition-transform group-hover:rotate-0"></div>
                            <div className="absolute inset-2 top-8 left-8 right-4 bottom-4 bg-white shadow-lg transform rotate-2 transition-transform group-hover:rotate-0 border-t border-gray-200"></div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Public Ministries, partner company data, legacy data, official maps, scientific reporting, legal filings and more
                        </p>
                    </div>

                    {/* Column 2: Columbus Surveying */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl text-white font-normal">Columbus Surveying</h3>
                        <div className="aspect-square w-full bg-[#D9D9D9] border border-white/30 rounded-lg"></div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            We collect proprietary data including local interviews, ground fieldwork, ariel imaging, street photography analysis, geophysics sampling, environmental and sociological research
                        </p>
                    </div>

                    {/* Column 3: Data Digestion */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl text-white font-normal">Data Digestion</h3>
                        <div className="aspect-square w-full bg-[#D9D9D9] border border-white/30 rounded-lg"></div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            We&apos;ve developed a technology that turns unstructured, broken or un-spatially paired data into useful information
                        </p>
                    </div>

                    {/* Column 4: Generative Layers */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl text-white font-normal">Generative Layers</h3>
                        <div className="aspect-square w-full bg-gradient-to-br from-blue-400 via-yellow-200 to-green-400 border border-white/30 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Our LGM creates highly accurate extrapolations, predictive future data and fills in data gaps where surveying is expensive
                        </p>
                    </div>

                </div>

                {/* Footer Text */}
                <div className="border-t border-white/20 pt-8 -mt-15 ">
                    <div className="flex justify-between items-end">
                        <h4 className="text-2xl md:text-3xl text-white font-normal max-w-3xl">
                            We turn earth into an intelligence hub for your research and decision making.
                        </h4>
                        <button className="hidden md:flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium">
                            Learn more <span className="text-lg">›</span>
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Blur Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAFAF9] to-transparent z-1 pointer-events-none"></div>
        </section>
    );
};
