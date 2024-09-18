import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowRightIcon
} from '@radix-ui/react-icons';
import Image from 'next/image';
import BackgroundParticles from '@/components/reusables/BackgroundParticles';
import GradientButton from '@/components/reusables/GradientButton';
import steps from './steps';

export default function HowItWorks({ showButton = true }) {
    return (
        <section className="relative py-16 bg-gradient-to-b from-white to-slate-50">
            <BackgroundParticles id='biz' />
            <div className="absolute top-32 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    How It Works
                </h2>
                <div className="relative">
                    <div className="space-y-12 lg:space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className="relative" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                                <div className={`absolute top-0 hidden lg:block ${index % 2 === 0 ? '-left-20' : '-right-20'} -mt-10`}>
                                    <svg width="120" height="120" viewBox="0 0 120 120" className="transform scale-75 sm:scale-100">
                                        <defs>
                                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#6366f1" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                        </defs>
                                        <text
                                            x="50%"
                                            y="50%"
                                            dominantBaseline="middle"
                                            textAnchor="middle"
                                            fontSize="80"
                                            fontWeight="bold"
                                            fill="none"
                                            stroke={`url(#gradient-${index})`}
                                            strokeWidth="2"
                                        >
                                            {step.number}
                                        </text>
                                    </svg>
                                </div>
                                <div className="lg:hidden flex justify-center mb-4">
                                    <svg width="80" height="80" viewBox="0 0 120 120">
                                        <defs>
                                            <linearGradient id={`gradient-mobile-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#6366f1" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                        </defs>
                                        <text
                                            x="50%"
                                            y="50%"
                                            dominantBaseline="middle"
                                            textAnchor="middle"
                                            fontSize="80"
                                            fontWeight="bold"
                                            fill="none"
                                            stroke={`url(#gradient-mobile-${index})`}
                                            strokeWidth="2"
                                        >
                                            {step.number}
                                        </text>
                                    </svg>
                                </div>
                                <Card className={`
                    relative overflow-hidden transition-all duration-300 hover:shadow-xl
                    w-full lg:w-3/4 ${index % 2 === 0 ? 'lg:ml-auto' : ''}
                    group
                  `}>
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="flex-grow lg:w-2/3 p-6">
                                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                                            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 -mx-6 -mt-6 mb-4 p-6">
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                                                        {React.createElement(step.icon, { className: "w-5 h-5" })}
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-xl font-bold text-slate-800">{step.title}</CardTitle>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                                            </CardContent>
                                        </div>
                                        <div className="lg:w-1/3 overflow-hidden">
                                            <div className="h-48 lg:h-full relative">
                                                <Image
                                                    src={step.image}
                                                    alt={`${step.title} Process`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none transition-transform duration-300 group-hover:scale-110 object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {showButton && (
                    <div className="relative z-20 flex justify-center mt-16" data-aos="fade-up">
                        <GradientButton text="Learn More" href="/services" Icon={ArrowRightIcon} />
                    </div>
                )}
            </div>
        </section>
    );
}