import { Flame } from 'lucide-react';
import Link from 'next/link';

export default function Logo({ isScrolled, monochrome = false }: { isScrolled: boolean; monochrome?: boolean }) {
    return (
        <Link href="/" passHref legacyBehavior>
            <a className="flex cursor-pointer" aria-label="Go to homepage">
                <div className="flex-shrink-0 flex items-center">
                    <div className="flex items-center space-x-2 group">
                        <div className="relative w-8 h-8">
                            {!monochrome && (
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-400 to-purple-400 opacity-40 blur-md rounded-full animate-flame"></div>
                            )}
                            <Flame
                                className={`w-8 h-8 transform transition-all duration-300 relative z-10
                  ${monochrome
                                        ? 'text-white'
                                        : isScrolled
                                            ? 'text-indigo-600'
                                            : 'text-indigo-700'
                                    }
                  group-hover:scale-110 group-hover:rotate-12`}
                            />
                        </div>
                        <span
                            className={`text-2xl font-bold transition-all duration-300
                ${monochrome
                                    ? 'text-white'
                                    : `bg-clip-text text-transparent bg-gradient-to-r 
                    ${isScrolled
                                        ? 'from-indigo-600 via-purple-600 to-indigo-600'
                                        : 'from-indigo-700 via-purple-700 to-indigo-700'
                                    }
                    bg-size-200 bg-pos-0 group-hover:bg-pos-100`
                                }`
                            }
                        >
                            Pumpy
                        </span>
                    </div>
                </div>
            </a>
        </Link>
    )
}