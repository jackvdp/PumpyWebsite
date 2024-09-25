import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/app/images/logo-web.png';

export default function Logo({ isScrolled, monochrome = false }: { isScrolled: boolean; monochrome?: boolean }) {
    const getLogoColor = () => {
        if (monochrome) return 'brightness-0 invert'; // White for monochrome
        return 'brightness-0 saturate-100 invert-[.4] sepia-[.1] saturate-[25] hue-rotate-[230deg]';
    };

    return (
        <Link href="/" passHref legacyBehavior>
            <a className="flex cursor-pointer" aria-label="Go to homepage">
                <div className="flex-shrink-0 flex items-center">
                    <div className="group relative">
                        <Image
                            src={LogoImage}
                            alt="Pumpy Logo"
                            width={150}
                            height={58}
                            className={`transform transition-all duration-300
                ${getLogoColor()}
                group-hover:scale-105`}
                        />
                    </div>
                </div>
            </a>
        </Link>
    );
}