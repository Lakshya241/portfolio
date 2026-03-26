import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  style 
}) => {
  const hoverClasses = hover ? 'glass-hover' : '';
  
  return (
    <div 
      className={`glass rounded-xl p-6 ${hoverClasses} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
