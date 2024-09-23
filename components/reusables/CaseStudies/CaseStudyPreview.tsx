import React from 'react';
import Image from 'next/image';
import { CaseStudy } from './caseStudies';

export default function CaseStudyPreview({ caseStudy, index }: {
    caseStudy: CaseStudy;
    index: number;
}) {
    const screenshotUrl = `/api/screenshot?url=${encodeURIComponent(caseStudy.url)}`;

    return (
        <div
            className="relative"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div
                className="relative w-full overflow-hidden border border-gray-200 rounded-lg"
                style={{ paddingBottom: '62.5%' }} // 16:10 aspect ratio
            >
                <Image
                    src={screenshotUrl}
                    alt={`Screenshot of ${caseStudy.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index < 2} // Load the first two images immediately
                />
                <a
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100"
                >
                    <span className="text-white font-bold">View Full Site</span>
                </a>
            </div>
        </div>
    );
}