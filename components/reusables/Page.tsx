"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ScrollTracker from '@/components/reusables/ScrollTracker';
import Navigation from '@/components/reusables/Navigation';
import Footer from '@/components/reusables/Footer';
import CustomCursor from '@/components/reusables/CustomCursor';

export default function Page({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    < div className="min-h-screen flex flex-col" >
      <CustomCursor />
      <ScrollTracker />
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div >
  );
}
