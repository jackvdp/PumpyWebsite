import React from 'react';
import {
  RocketIcon,
  LightningBoltIcon,
  PersonIcon,
  ArrowRightIcon
} from '@radix-ui/react-icons';
import Contact from '@/components/reusables/Contact';
import GradientButton from '@/components/reusables/GradientButton';
import Page from '@/components/reusables/Page';
import BackgroundParticles from '@/components/reusables/BackgroundParticles';
import Logos from '@/components/reusables/Logos';
import CaseStudies from '@/components/reusables/CaseStudies';
import FeatureCard from '@/components/reusables/FeatureCard';
import Hero from '@/components/reusables/Hero';
import { getPageMetadata } from '@/lib/getMetadata';
import HowItWorks from '@/components/reusables/HowItWorks';

export const metadata = getPageMetadata({
  description: "Pumpy is a digital agency that provides tailored web development and design services to help businesses grow online.",
});

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <Logos />
      <Benefits />
      {/* <CaseStudies /> */}
      <HowItWorks />
      <Contact />
    </Page>
  );
}

function Benefits() {
  const benefits = [
    {
      title: 'Personal Service',
      description:
        'We proivde a personal experience that ensures a bespoke and tailored solution for your needs. We work with you to understand and bring to life your vision and match your business objectives.',
      icon: PersonIcon,
    },
    {
      title: 'Fast Delivery',
      description:
        'Deliver high-quality, customized websites and apps quickly. An efficient workflow ensures rapid turnaround times so you can start benefiting from your new digital assets sooner.',
      icon: RocketIcon,
    },
    {
      title: 'Cost-Effective',
      description:
        'Access premium, tailored solutions without the high costs of larger agencies. Achieve top-quality results that fit your budget and maximize the value of your investment.',
      icon: LightningBoltIcon
    },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-slate-50 to-white" id='benefits'>
      <BackgroundParticles id='foo' />
      <div className="absolute top-32 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Why Choose Pumpy?
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <FeatureCard {...benefit} index={index} />
          ))}
        </div>
        <div className="relative z-20 flex justify-center my-8" data-aos="fade-up">
          <GradientButton text="Find Out More" href="/about" Icon={ArrowRightIcon} />
        </div>
      </div>
    </section>
  );
}