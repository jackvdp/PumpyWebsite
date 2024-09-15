import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react";

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    index: number;
}

export default function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
    return (
        <Card
            key={index}
            data-aos="fade-up"
            data-aos-delay={(index * 100).toString()}
            className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-indigo-50 border border-indigo-100"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-300"></div>
            <CardHeader className="relative z-10 pb-8">
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-md transform transition-transform group-hover:rotate-6 duration-300">
                        {React.createElement(icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors duration-300">
                        {title}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col">
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 flex-grow">
                    {description}
                </p>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </Card>
    )
}