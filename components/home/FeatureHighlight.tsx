import Image from "next/image";

export const FeatureHighlight = () => {
    return (
        <section className="w-full py-24 flex items-center justify-center">
            <div className="relative w-full max-w-7xl mx-auto h-[600px] rounded-2xl overflow-hidden mx-4 md:mx-8">
                <Image
                    src="/tokyo.png"
                    alt="Shibuya Crossing Tokyo"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative z-10 w-full h-full flex items-center px-8 md:px-16">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-medium text-white leading-tight tracking-tight">
                            Shibuya crossing in Tokyo. The world&apos;s most busy street, densely packed with businesses and infrastructure.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};
