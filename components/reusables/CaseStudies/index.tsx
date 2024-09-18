// CaseStudies.tsx

import React from 'react';
import GradientButton from '../GradientButton';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import caseStudies from './caseStudies';

function CaseStudies() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          Our Case Studies
        </h2>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Aspect Ratio Container */}
              <div
                className="relative w-full overflow-hidden border border-gray-200 rounded-lg"
                style={{ paddingBottom: '62.5%' }} // 16:10 aspect ratio
              >
                {/* Scaled iframe */}
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
                ></iframe>
                {/* Overlay to Open in New Tab */}
                <a
                  href={caseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                ></a>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Button */}
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

export default CaseStudies;