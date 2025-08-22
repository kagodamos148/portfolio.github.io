import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export const Button = ({ href, onClick, variant = 'primary', children, className = '' }: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center';
  const variants = {
    primary: 'bg-[#1CA75B] hover:bg-[#168f4b] text-white',
    secondary: 'border-2 border-[#1CA75B] text-[#1CA75B] hover:bg-[#1CA75B] hover:text-white'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
