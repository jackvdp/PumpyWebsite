"use client";

import React, { useState, useEffect, useRef } from 'react';
import GradientButton from '../GradientButton';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import caseStudies, { CaseStudy} from './caseStudies';

const CaseStudyPreview = ({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      ref={iframeRef}
    >
      <div
        className="relative w-full overflow-hidden border border-gray-200 rounded-lg"
        style={{ paddingBottom: '62.5%' }} // 16:10 aspect ratio
      >
        {isVisible && (
          <iframe
            src={caseStudy.url}
            title={caseStudy.name}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              transform: 'scale(0.25)',
              transformOrigin: 'top left',
              width: '400%',
              height: '400%',
            }}
            loading="lazy"
            sandbox="allow-scripts"
          />
        )}
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
};

export default function CaseStudies() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          Our Case Studies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyPreview key={index} caseStudy={caseStudy} index={index} />
          ))}
        </div>
        <div
          className="relative z-20 flex justify-center my-8"
          data-aos="fade-up"
        >
          <GradientButton
            text="See More"
            href="/casestudies"
            Icon={ArrowRightIcon}
          />
        </div>
      </div>
    </section>
  );
}