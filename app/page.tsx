"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
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

export default function HomePage() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className=""> {/* Add padding-top to prevent content from being hidden behind the navbar */}
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-white/30 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-indigo-700'
                }`}>Pumpy</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {['About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-slate-700 hover:text-indigo-900' : 'text-slate-800 hover:text-indigo-900'
                      } hover:bg-slate-50/20`}>
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-slate-400 hover:text-slate-500' : 'text-slate-600 hover:text-slate-700'
                } hover:bg-slate-100/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
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
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50/20"
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
    <section className="bg-slate-50 h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
            <span data-aos="fade-left" className="block">Elevate Your Digital Presence</span>
            <span data-aos="fade-right" className="block text-indigo-600">with Pumpy</span>
          </h1>
          <p data-aos="fade-up" className="mt-3 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Crafting exceptional websites and apps for businesses that want to stand out.
          </p>
          <div data-aos="zoom-in" className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button size="lg">Let's Talk</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Logos() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-hidden space-x-8">
          {['Met Office', 'Department for Business & Trade', 'Patch Consultancy', 'Gigabyte Software', 'Elev8 Exchange'].map((company) => (
            <div key={company} className="flex-shrink-0 flex items-center justify-center h-12">
              <span className="text-slate-400">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-left" className="text-3xl font-extrabold text-slate-900 text-center mb-12">Why Choose Pumpy?</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Tailored Solutions', description: 'Custom-built websites and apps that perfectly fit your unique business needs.' },
            { title: 'Cutting-Edge Technology', description: 'We use the latest tech stack to ensure your digital presence is future-proof.' },
            { title: 'Independent Developer', description: 'Direct communication and personalized attention throughout your project.' },
            { title: 'Rapid Turnaround', description: 'Efficient processes that deliver high-quality results in record time.' },
            {
              title: 'Ongoing Support', description: "We're with you long after launch, ensuring your digital assets continue to perform."
            },
            { title: 'Cost-Effective', description: 'Premium quality without the premium price tag of larger agencies.' },
          ].map((benefit, index) => (
            <Card key={index} data-aos="fade-up" data-aos-delay={(index * 200).toString()}>
              <CardHeader>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Discover', number: '01', description: 'We collaborate closely with you to understand your vision, goals, and target audience. Through in-depth research and analysis, we align our strategies with your objectives.' },
            { title: 'Design', number: '02', description: 'Our skilled designers transform ideas into visually engaging and intuitive user interfaces. We focus on UX and UI principles to ensure appealing and seamless navigation.' },
            { title: 'Build', number: '03', description: 'Our dedicated development team brings designs to life using cutting-edge technologies and best coding practices. We maintain regular feedback loops for transparency.' },
            { title: 'Deploy', number: '04', description: 'We ensure a smooth transition from development to the live environment with minimal downtime. Post-launch support and maintenance services are provided for sustained excellence.' },
          ].map((step, index) => (
            <Card key={index} data-aos="fade-up" data-aos-delay={(index * 200).toString()}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.number}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Phone: +44 (0) 7831640003</p>
              <p>Email: jack@vanderpump.tech</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Pumpy</h3>
            <p>Elevating digital experiences through innovative web and app development.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="hover:text-indigo-400">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p>Follow us on social media for the latest updates and insights.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center">
          <p>&copy; 2024 Pumpy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
