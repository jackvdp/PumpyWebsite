import React from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from "@/components/ui/button";

interface GradientButtonProps extends Omit<ButtonProps, 'onClick'> {
    text: string;
    Icon?: React.ComponentType<{ className?: string }>;
    href: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
    text,
    Icon,
    href,
    className,
    ...props
}) => {
    return (

        <Button asChild
            size="lg"
            className={`
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
          ${className || ''}
        `}
            {...props}
        >
            <Link href={href}>
                {Icon && <Icon className="mr-3 h-6 w-6" />}
                {text}

            </Link>
        </Button >
    );
};

export default GradientButton;