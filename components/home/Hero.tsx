import { shipporiMincho } from "@/lib/fonts";

export const Hero = () => {
    return (
        <section className="relative mt-[37px] flex w-full min-h-[calc(100vh-76px)] flex-col overflow-hidden">
            <div className="flex flex-1 items-center">
                <div className="mx-auto w-full max-w-[1080px] px-5 lg:px-8">
                    <h1
                        className={[
                            shipporiMincho.className,
                            "max-w-[800px] text-[#0a1628]",
                            "text-[40px] leading-[1.08] tracking-[-0.012em]",
                            "sm:text-[40px] sm:leading-[1.04]",
                            "md:text-[40px] md:leading-[1.02]",
                            "lg:text-[50px] lg:leading-[1] lg:-translate-x-35",
                        ].join(" ")}
                    >
                        <span className="block whitespace-nowrap">The frontier AI Lab</span>
                        <span className="mt-[0.16em] block whitespace-nowrap">building the first in-production</span>
                        <span className="mt-[0.16em] block whitespace-nowrap">Universal Geospatial Model.</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};
