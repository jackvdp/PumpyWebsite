"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Droplet as WaterIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AOS from 'aos';
import 'aos/dist/aos.css'
import * as Icons from '@radix-ui/react-icons';

export default function HomePage() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="">
        <Hero />
        <Logos />
        <Benefits />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/70 backdrop-blur-md shadow-md'
      : 'bg-gradient-to-r from-white/30 to-indigo-100/30 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2 group">
                <div className="relative">
                  <WaterIcon
                    className={`w-8 h-8 transform transition-all duration-300 group-hover:rotate-180 ${isScrolled ? 'text-indigo-600' : 'text-indigo-700'
                      }`}
                  />
                  <div className="absolute inset-0 bg-indigo-400 opacity-25 blur-sm rounded-full animate-pulse"></div>
                </div>
                <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r transition-all duration-300
    ${isScrolled
                    ? 'from-indigo-600 via-purple-600 to-indigo-600'
                    : 'from-indigo-700 via-purple-700 to-indigo-700'
                  }
    bg-size-200 bg-pos-0 group-hover:bg-pos-100`}
                >
                  Pumpy
                </span>
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {['About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink className={`px-3 py-2 rounded-md text-sm font-medium relative ${isScrolled ? 'text-slate-700 hover:text-indigo-900' : 'text-slate-800 hover:text-indigo-900'
                      } hover:bg-indigo-50/20 transition-all duration-300`}>
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 transition-transform duration-300 ease-in-out"></span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-full ${isScrolled ? 'text-slate-400 hover:text-slate-500' : 'text-slate-600 hover:text-slate-700'
                } hover:bg-indigo-100/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-white/70 backdrop-blur-md">
            {['About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-900 hover:bg-indigo-50/20 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-indigo-100 h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            <span data-aos="fade-down" data-aos-duration="1000" className="block">Elevate Your Digital Presence</span>
            <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="block text-indigo-600">with Pumpy</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="mt-3 max-w-md mx-auto text-base text-slate-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Crafting exceptional websites and apps for businesses that want to stand out.
          </p>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <GradientButton />
          </div>
        </div>
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[200%] aspect-[1/0.7] [mask-image:linear-gradient(to_bottom,white,transparent)]">
          <div className="flex flex-col items-center">
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                style={{
                  transform: `translateY(${index * 12}px) translateZ(0) scaleY(0.5)`,
                  opacity: 1 - index * 0.05
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const GradientButton = () => {
  return (
    <Button
      size="lg"
      className="
        rounded-full 
        px-10 
        py-6 
        text-lg
        bg-gradient-to-r from-indigo-600 to-purple-600 
        hover:from-indigo-700 hover:to-purple-700 
        text-white 
        font-semibold 
        transition-all 
        duration-300 
        hover:shadow-lg 
        hover:scale-105
        flex 
        items-center 
        justify-center
      "
    >
      <Icons.ChatBubbleIcon className="mr-3 h-6 w-6" />
      Let's Talk
    </Button>
  );
};

function Logos() {
  const companies = [
    { name: 'Met Office', icon: <Icons.SunIcon /> },
    { name: 'Department for Business & Trade', icon: <Icons.BarChartIcon /> },
    { name: 'Patch Consultancy', icon: <Icons.PaperPlaneIcon /> },
    { name: 'Gigabyte Software', icon: <Icons.CodeIcon /> },
    { name: 'Elev8 Exchange', icon: <Icons.BarChartIcon /> },
    { name: 'Tech Innovators', icon: <Icons.LightningBoltIcon /> },
    { name: 'Global Systems', icon: <Icons.GlobeIcon /> },
    { name: 'Data Dynamics', icon: <Icons.BarChartIcon /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Trusted by Industry Leaders
        </h2>
        <div className="relative">
          <div className="flex space-x-12 animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start w-40 transition-all duration-300 hover:scale-105"
              >
                <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center mb-4 transform transition-all duration-300 hover:rotate-6 hover:shadow-xl">
                  {React.cloneElement(company.icon, {
                    className: "w-16 h-16 text-indigo-600"
                  })}
                </div>
                <span className="text-sm font-medium text-slate-700 text-center h-12 flex items-center">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefitIcons = [
    <Icons.MixerVerticalIcon />,
    <Icons.LightningBoltIcon />,
    <Icons.PersonIcon />,
    <Icons.TimerIcon />,
    <Icons.UpdateIcon />,
    <Icons.DashboardIcon />,
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Why Choose Pumpy?
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Tailored Solutions', description: 'Custom-built websites and apps that perfectly fit your unique business needs.' },
            { title: 'Cutting-Edge Technology', description: 'We use the latest tech stack to ensure your digital presence is future-proof.' },
            { title: 'Independent Developer', description: 'Direct communication and personalized attention throughout your project.' },
            { title: 'Rapid Turnaround', description: 'Efficient processes that deliver high-quality results in record time.' },
            { title: 'Ongoing Support', description: "We're with you long after launch, ensuring your digital assets continue to perform." },
            { title: 'Cost-Effective', description: 'Premium quality without the premium price tag of larger agencies.' },
          ].map((benefit, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 200).toString()}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-600 rounded-bl-full opacity-10"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-100 rounded-full">
                    {React.cloneElement(benefitIcons[index], { className: "w-6 h-6 text-indigo-600" })}
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mt-4 text-slate-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const stepIcons = [
    <Icons.MagnifyingGlassIcon />,
    <Icons.Pencil1Icon />,
    <Icons.LightningBoltIcon />,
    <Icons.RocketIcon />,
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          How It Works
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200 hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {[
              { title: 'Discover', number: '01', description: 'We collaborate closely with you to understand your vision, goals, and target audience. Through in-depth research and analysis, we align our strategies with your objectives.' },
              { title: 'Design', number: '02', description: 'Our skilled designers transform ideas into visually engaging and intuitive user interfaces. We focus on UX and UI principles to ensure appealing and seamless navigation.' },
              { title: 'Build', number: '03', description: 'Our dedicated development team brings designs to life using cutting-edge technologies and best coding practices. We maintain regular feedback loops for transparency.' },
              { title: 'Deploy', number: '04', description: 'We ensure a smooth transition from development to the live environment with minimal downtime. Post-launch support and maintenance services are provided for sustained excellence.' },
            ].map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <Card className="relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                    <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600">
                          {React.cloneElement(stepIcons[index], { className: "w-6 h-6" })}
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-slate-800">{step.title}</CardTitle>
                          <CardDescription className="text-indigo-600 font-semibold">{step.number}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="bg-white shadow-xl" data-aos="fade-right">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <Icons.EnvelopeClosedIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">Contact Form</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
                  <Input id="name" placeholder="John Doe" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Your Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Your Message</label>
                  <Textarea id="message" placeholder="How can we help you?" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <Icons.PaperPlaneIcon className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="lg:flex lg:flex-col lg:justify-between" data-aos="fade-left">
            <Card className="bg-white shadow-xl mb-8">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Icons.IdCardIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800">Contact Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-center text-slate-600">
                  <Icons.MobileIcon className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+447831640003" className="ml-2 hover:text-purple-600 transition-colors">+44 (0) 7831640003</a>
                </p>
                <p className="flex items-center text-slate-600">
                  <Icons.EnvelopeClosedIcon className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="font-medium">Email:</span>
                  <a href="mailto:jack@vanderpump.tech" className="ml-2 hover:text-purple-600 transition-colors">jack@vanderpump.tech</a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6">Follow us on social media for the latest updates and insights.</p>
                <div className="flex space-x-4">
                  {[Icons.TwitterLogoIcon, Icons.LinkedInLogoIcon, Icons.InstagramLogoIcon].map((Icon, index) => (
                    <a key={index} href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">About Pumpy</h3>
            <p className="text-slate-300">Elevating digital experiences through innovative web and app development.</p>
            <a href="#" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
              Learn more <Icons.ArrowRightIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-slate-300 hover:text-indigo-400 transition-colors">
                    <Icons.ArrowRightIcon className="mr-2 w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Connect</h3>
            <p className="text-slate-300">Follow us on social media for the latest updates and insights.</p>
            <div className="flex space-x-4">
              {[
                { icon: <Icons.TwitterLogoIcon />, label: 'Twitter' },
                { icon: <Icons.LinkedInLogoIcon />, label: 'LinkedIn' },
                { icon: <Icons.InstagramLogoIcon />, label: 'Instagram' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-slate-700 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label={social.label}
                >
                  {React.cloneElement(social.icon, { className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400">&copy; 2024 Pumpy. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}