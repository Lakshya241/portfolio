import React, { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '' 
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);
  };

  const baseClasses = 'px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline'
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  const rippleElements = ripples.map(ripple => (
    <span
      key={ripple.id}
      className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
      style={{
        left: ripple.x,
        top: ripple.y,
        width: '20px',
        height: '20px',
        transform: 'translate(-50%, -50%)'
      }}
    />
  ));
  
  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        onClick={createRipple}
      >
        {rippleElements}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }
  
  return (
    <button 
      onClick={(e) => {
        createRipple(e);
        onClick?.();
      }} 
      className={combinedClasses}
    >
      {rippleElements}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
