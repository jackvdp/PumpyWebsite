import {
    TwitterLogoIcon,
    LinkedInLogoIcon,
    InstagramLogoIcon,
    ArrowRightIcon
}from '@radix-ui/react-icons';
import React from 'react';

export default function Footer() {
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
                Learn more <ArrowRightIcon className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center text-slate-300 hover:text-indigo-400 transition-colors">
                      <ArrowRightIcon className="mr-2 w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
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
                  { icon: <TwitterLogoIcon />, label: 'Twitter' },
                  { icon: <LinkedInLogoIcon />, label: 'LinkedIn' },
                  { icon: <InstagramLogoIcon />, label: 'Instagram' },
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
    );
  }