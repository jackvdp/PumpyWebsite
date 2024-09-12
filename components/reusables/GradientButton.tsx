import React from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from "@/components/ui/button";

interface GradientButtonProps extends Omit<ButtonProps, 'onClick'> {
  text: string;
  Icon?: React.ComponentType<{ className?: string }>;
  href: string;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  Icon,
  href,
  size,
  className,
  ...props
}) => {
  const isSmall = size === 'sm';

  const buttonClasses = `
    rounded-full
    ${isSmall ? 'px-6 py-2 text-sm' : 'px-10 py-6 text-lg'}
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
  `;

  const iconClasses = isSmall ? 'mr-2 h-4 w-4' : 'mr-3 h-6 w-6';

  return (
    <Button asChild
      size={size}
      className={buttonClasses}
      {...props}
    >
      <Link href={href}>
        {Icon && <Icon className={iconClasses} />}
        {text}
      </Link>
    </Button>
  );
};

export const LargeGradientButton: React.FC<Omit<GradientButtonProps, 'size'>> = (props) => (
  <GradientButton {...props} size="lg" />
);

export const SmallGradientButton: React.FC<Omit<GradientButtonProps, 'size'>> = (props) => (
  <GradientButton {...props} size="sm" />
);

export default GradientButton;