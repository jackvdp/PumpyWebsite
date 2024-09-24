import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-800 to-purple-900 text-white relative overflow-hidden">
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.74,22,103.74,31.9,158,27,70-6,136-32,206-35,71-3,142,19,213,32,61,11,122,12,183-3,49-12,98-35,148-35,64,0,126,27,188,43,30,8,60,14,90,18V0Z"
            opacity=".25"
            fill="#FFFFFF"
          ></path>
          <path
            d="M0,0V15.81C47.74,33,103.74,45,158,47,228,50,294,31,364,28c71-3,142,12,213,23,61,9,122,10,183-2,49-10,98-27,148-27,64,0,126,17,188,27,30,5,60,8,90,9V0Z"
            opacity=".5"
            fill="#FFFFFF"
          ></path>
          <path
            d="M0,0V5.63C47.74,13,103.74,20,158,21,228,22,294,17,364,14c71-3,142,1,213,8,61,6,122,8,183,4,49-4,98-13,148-13,64,0,126,7,188,11,30,2,60,3,90,2V0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-white-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Logo isScrolled={true} monochrome={true} />
            <p className="text-slate-100">
              Elevating digital experiences through innovative web and app development.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white-300 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-100 hover:text-pink-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white-300 mb-4">Connect</h3>
            <p className="text-slate-100">
              Follow us on social media for the latest updates and insights.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <TwitterLogoIcon />, label: 'Twitter' },
                { icon: <LinkedInLogoIcon />, label: 'LinkedIn' },
                { icon: <InstagramLogoIcon />, label: 'Instagram' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-purple-700 rounded-full hover:bg-pink-500 transition-colors"
                  aria-label={social.label}
                >
                  {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-200">&copy; 2024 Pumpy. All rights reserved.</p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-slate-200 hover:text-white-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-200 hover:text-white-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}