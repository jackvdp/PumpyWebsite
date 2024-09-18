"use client"
import Image from "next/image";
import Slider from 'react-infinite-logo-slider';
import companies from "./companies";

export default function Logos() {
    const slate50 = "#f8fafc";

    const LogoImage = ({ company }) => (
        <Image
            src={company.imageUrl}
            alt={company.name}
            width={240}
            height={120}
            style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
            className={`filter brightness-0 opacity-70 ${company.animate ? "hover:filter-none hover:opacity-100" : ""} transition-all duration-300`}
        />
    );

    return (
        <section className="py-12 bg-gradient-to-b from-slate-50 to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid for small screens */}
                <div className="grid grid-cols-2 gap-8 md:hidden">
                    {companies.map((company, index) => (
                        <div key={index} className="flex items-center justify-center h-20">
                            <LogoImage company={company} />
                        </div>
                    ))}
                </div>

                {/* Carousel for md screens and above */}
                <div className="hidden md:block">
                    <Slider
                        width="250px"
                        duration={40}
                        pauseOnHover={false}
                        blurBorders={true}
                        blurBoderColor={slate50}
                    >
                        {companies.map((company, index) => (
                            <Slider.Slide key={index}>
                                <div className="flex items-center justify-center w-40 h-20">
                                    <LogoImage company={company} />
                                </div>
                            </Slider.Slide>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}