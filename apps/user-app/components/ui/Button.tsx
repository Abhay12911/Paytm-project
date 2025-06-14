import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ 
  variant = 'primary', 
  children, 
  href, 
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = 'inline-block rounded font-medium transition-all duration-300 shadow-sm px-5 py-3 text-center';
  
  const variantStyles = {
    primary: 'border border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700 hover:scale-105',
    secondary: 'border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 hover:scale-105'
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a className={combinedStyles} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;