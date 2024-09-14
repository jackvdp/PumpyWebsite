"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import {
  RocketIcon,
  LightningBoltIcon,
  ChatBubbleIcon,
  PersonIcon,
  MagnifyingGlassIcon,
  Pencil1Icon,
  ArrowRightIcon
} from '@radix-ui/react-icons';
import Image from 'next/image';
import Contact from '@/components/reusables/Contact';
import GradientButton from '@/components/reusables/GradientButton';
import ScrollIndicator from '@/components/reusables/ScrollIndicator';
import Page from '@/components/reusables/Page';
import BackgroundBalls from '@/components/reusables/BackgroundBalls';
import Logos from '@/components/reusables/Logos';
import CaseStudies from '@/components/reusables/CaseStudies';

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <Logos />
      <Benefits />
      <CaseStudies />
      <HowItWorks />
      <Contact />
    </Page>
  );
}

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const featuresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Increase this value for more delay between items
        delayChildren: 0.8 // Delay before the first item appears
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-indigo-100 min-h-screen flex flex-col justify-between overflow-hidden">
      {['bg-indigo-300', 'bg-purple-300', 'bg-pink-300', 'bg-blue-300', 'bg-violet-300'].map((color, index) => (
        <motion.div
          key={index}
          className={`absolute w-64 h-64 ${color} rounded-full mix-blend-multiply filter blur-xl opacity-50`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, index % 2 === 0 ? 50 : -50, 0],
            y: [0, index % 2 === 0 ? 30 : -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            top: `${(index * 20) % 100}%`,
            left: `${(index * 25) % 100}%`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="flex-grow flex items-center pt-16">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
              variants={itemVariants}
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                Crafting Digital Solutions
              </span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient">
                That Work for You
              </span>
            </motion.h1>
            <motion.p
              className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-slate-700"
              variants={itemVariants}
            >
              We specialize in crafting bespoke websites and apps that perfectly fit your unique needs.
              Our agile approach ensures swift delivery, coupled with a personalized service at every step,
              to bring your digital vision to life quickly and effectively.
            </motion.p>
            <motion.div
              className="mt-5 w-full sm:w-auto md:mt-8 flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <GradientButton
                text="Let's Discuss Your Project"
                Icon={ChatBubbleIcon}
                href="/contact"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features aligned to bottom */}
      <div className="w-full py-6">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-8"
          variants={featuresContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: PersonIcon, text: "Personal Service" },
            { icon: RocketIcon, text: "Fast Delivery" },
            { icon: LightningBoltIcon, text: "Cost-Effective" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              variants={featureItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg"
                whileHover={{ rotate: 5 }}
              >
                <item.icon className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-sm font-bold text-gray-800">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <ScrollIndicator />
      </div>

      {/* Background lines animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[200%] aspect-[1/0.7] [mask-image:linear-gradient(to_bottom,white,transparent)]">
          <div className="flex flex-col items-center">
            {[...Array(20)].map((_, index) => (
              <motion.div
                key={index}
                className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                style={{
                  translateY: index * 12,
                  scaleY: 0.5,
                  opacity: 1 - index * 0.05,
                }}
                animate={{
                  translateX: ["-10%", "10%", "-10%"],
                  scaleY: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0,
                  repeat: 0,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
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
      <BackgroundBalls />
      <div className="absolute top-32 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Why Choose Pumpy?
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-indigo-50 border border-indigo-100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-300"></div>
              <CardHeader className="relative z-10 pb-2">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-md transform transition-transform group-hover:rotate-6 duration-300">
                    {React.createElement(benefit.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 flex flex-col">
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 flex-grow">
                  {benefit.description}
                </p>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Card>
          ))}
        </div>
        <div className="relative z-20 flex justify-center my-8" data-aos="fade-up">
          <GradientButton text="Find Out More" href="/about" Icon={ArrowRightIcon} />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const stepIcons = [
    MagnifyingGlassIcon,
    Pencil1Icon,
    LightningBoltIcon,
    RocketIcon,
  ];

  const steps = [
    {
      title: 'Discover',
      number: '01',
      description: 'We collaborate closely with you to understand your vision, goals, and target audience. Through in-depth research and analysis, we align our strategies with your objectives.',
      image: "https://as2.ftcdn.net/v2/jpg/03/03/89/59/1000_F_303895937_KBTgt7PP72JxULR548vNyxykvg2pj1Xu.jpg"
    },
    {
      title: 'Design',
      number: '02',
      description: 'Our skilled designers transform ideas into visually engaging and intuitive user interfaces. We focus on UX and UI principles to ensure appealing and seamless navigation.',
      image: "https://as2.ftcdn.net/v2/jpg/07/45/46/83/1000_F_745468308_L01HB9OcqDa4ZQkM2gl8B5cD59QqJAUc.jpg"
    },
    {
      title: 'Build',
      number: '03',
      description: 'Our dedicated development team brings designs to life using cutting-edge technologies and best coding practices. We maintain regular feedback loops for transparency.',
      image: "https://as1.ftcdn.net/v2/jpg/02/09/60/56/1000_F_209605626_jl61fimPD2rLxoVadH4D3ITQzjAOK7Eu.jpg"
    },
    {
      title: 'Deploy',
      number: '04',
      description: 'We ensure a smooth transition from development to the live environment with minimal downtime. Post-launch support and maintenance services are provided for sustained excellence.',
      image: "https://as2.ftcdn.net/v2/jpg/04/51/61/73/1000_F_451617336_VaJkzeco9G3wXdKQMrZLvUa9N2UY3vDe.jpg"
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-slate-50">
      <BackgroundBalls />
      <div className="absolute top-32 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          How It Works
        </h2>
        <div className="relative">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                <div className={`absolute top-0 ${index % 2 === 0 ? '-left-20' : '-right-20'} -mt-10`}>
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
                <Card className={`
                  relative overflow-hidden transition-all duration-300 hover:shadow-xl
                  lg:w-3/4 ${index % 2 === 0 ? 'lg:ml-auto' : ''}
                  group
                `}>
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex-grow lg:w-2/3 p-6">
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 -mx-6 -mt-6 mb-4 p-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                            {React.createElement(stepIcons[index], { className: "w-5 h-5" })}
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
                          layout="fill"
                          objectFit="cover"
                          className="rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 flex justify-center mt-16 mb-8" data-aos="fade-up">
          <GradientButton text="Learn More" href="/services" Icon={ArrowRightIcon} />
        </div>
      </div>
    </section>
  );
}