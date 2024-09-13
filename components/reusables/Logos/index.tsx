import Image from "next/image";
import styles from "./Logos.module.css";
import companies from "./companies";

export default function Logos() {
    
    // Duplicate the companies array once for seamless looping
    const extendedCompanies = [...companies, ...companies];

    return (
        <section className="py-12 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="relative overflow-hidden">
                    <div className={`flex w-[200% animate-marquee ${styles.animateMarquee}`}>
                        {extendedCompanies.map((company, index) => (
                            <div
                                key={index}
                                className="flex-none flex items-center justify-center w-40 h-20 mx-8">
                                <Image
                                    src={company.imageUrl}
                                    alt={company.name}
                                    width={240}
                                    height={120}
                                    objectFit="contain"
                                    className={`filter brightness-0 opacity-70 ${company.animate && "hover:filter-none hover:opacity-100"} transition-all duration-300`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}