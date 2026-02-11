import Image from "next/image";
import { cormorantGaramond } from "@/lib/fonts";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen pt-16 flex flex-col overflow-hidden">
            {/* Subtle right-side curves (as in the reference image) */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <svg
                    className="absolute right-[-10%] top-0 h-full w-[52rem] opacity-60"
                    viewBox="0 0 900 900"
                    fill="none"
                    style={{
                        WebkitMaskImage:
                            "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
                        maskImage:
                            "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
                    }}
                >
                    <path
                        d="M860 -40 C560 120 560 780 860 940"
                        stroke="rgba(255, 180, 180, 0.45)"
                        strokeWidth="1"
                    />
                    <path
                        d="M800 -40 C500 120 500 780 800 940"
                        stroke="rgba(255, 180, 180, 0.35)"
                        strokeWidth="1"
                    />
                    <path
                        d="M740 -40 C440 120 440 780 740 940"
                        stroke="rgba(255, 180, 180, 0.28)"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            {/* Hero Text */}
            <div className="flex-1 flex items-center">
                <div className="w-full max-w-5xl mx-auto px-4">
                    <h1
                        className={[
                            cormorantGaramond.className,
                            "text-[#0a1628]",
                            "text-[44px] leading-[1.12] tracking-[-0.02em]",
                            "sm:text-[52px] sm:leading-[1.08]",
                            "md:text-[60px] md:leading-[1.06]",
                            "lg:text-[66px] lg:leading-[1.04]",
                            "max-w-[720px]",
                        ].join(" ")}
                    >
                        The frontier AI Lab
                        <br />
                        building the first in-production
                        <br />
                        Universal Geospatial Model.
                    </h1>
                </div>
            </div>
        </section>
    );
};
