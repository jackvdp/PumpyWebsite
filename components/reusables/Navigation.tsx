import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Flame } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = ['About', 'Services', 'Case Studies', 'Blog', 'Contact'];

export default function Navigation() {
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
                    <Logo isScrolled={isScrolled} />
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navItems.map((item, index) => (
                                    <NavItem key={index} isScrolled={isScrolled} item={item} index={index} />
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="sm:hidden flex items-center">
                        <Hamburger isScrolled={isScrolled} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                    </div>
                </div>
            </div>
            {isMenuOpen && <SmallMenu />}
        </nav>
    );
}

function Logo({ isScrolled }: { isScrolled: boolean }) {
    return (
        <div className="flex">
            <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center space-x-2 group">
                    <div className="relative w-8 h-8">
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-400 to-purple-400 opacity-40 blur-md rounded-full animate-flame"></div>
                        <Flame
                            className={`w-8 h-8 transform transition-all duration-300 relative z-10
                  ${isScrolled ? 'text-indigo-600' : 'text-indigo-700'}
                  group-hover:scale-110 group-hover:rotate-12`}
                        />
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
    )
}

function NavItem({ isScrolled, item, index }: { isScrolled: boolean, item: string, index: number }) {
    return (
        <NavigationMenuItem key={index}>
            <Link href={`/${item.toLowerCase().replace(' ', '-')}`} passHref legacyBehavior>
                <NavigationMenuLink>
                    <span className={`
                            px-3 py-2 rounded-md text-sm font-medium relative 
                            ${isScrolled ? 'text-indigo-700' : 'text-indigo-800'}
                            transition-all duration-300 
                            hover:text-purple-600
                            nav-item-underline
                        `}>
                        {item}
                        <span className="nav-item-underline-bar"></span>
                    </span>
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}

function Hamburger({ isScrolled, toggleMenu, isMenuOpen }: { isScrolled: boolean, toggleMenu: () => void, isMenuOpen: boolean }) {
    return (
        <button
            onClick={toggleMenu}
            className={`inline-flex items-center justify-center p-2 rounded-full ${isScrolled ? 'text-slate-400 hover:text-slate-500' : 'text-slate-600 hover:text-slate-700'
                } hover:bg-indigo-100/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
        >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
    )
}

function SmallMenu() {
    return (
        <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1 bg-white/70 backdrop-blur-md">
                {navItems.map((item) => (
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
    )
}