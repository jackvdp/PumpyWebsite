import React from 'react';
import GradientButton from '../GradientButton';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import caseStudies from './caseStudies';
import CaseStudyPreview from './CaseStudyPreview';

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