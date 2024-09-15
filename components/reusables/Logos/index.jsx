import Image from "next/image";
import Slider from 'react-infinite-logo-slider';
import companies from "./companies";

export default function Logos() {
    return (
        <section className="py-12 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <Slider
                    width="250px"
                    duration={40}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBoderColor={'#fff'}
                >
                    {companies.map((company, index) => (
                        <Slider.Slide key={index}>
                            <div className="flex items-center justify-center w-40 h-20">
                                <Image
                                    src={company.imageUrl}
                                    alt={company.name}
                                    width={240}
                                    height={120}
                                    style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
                                    className={`filter brightness-0 opacity-70 ${company.animate ? "hover:filter-none hover:opacity-100" : ""} transition-all duration-300`}
                                />
                            </div>
                        </Slider.Slide>
                    ))}
                </Slider>
            </div>
        </section>
    );
}