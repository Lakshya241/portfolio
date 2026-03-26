'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { portfolioData } from '@/lib/data';

interface HeroProps {
  id: string;
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Hero: React.FC<HeroProps> = ({ id }) => {
  const { name, title, description } = portfolioData.personal;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background with parallax */}
      <div className="absolute inset-0 bg-gradient-animated"></div>
      
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Name with staggered letter animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          {name.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block"
              style={{
                animation: 'slideUp 0.6s ease-out',
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'both'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gradient font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {title}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            variant="primary" 
            onClick={() => scrollToSection('projects')}
            className="glow-effect"
          >
            View Projects
          </Button>
          <Button 
            variant="secondary" 
            href="/resume.pdf"
          >
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      {/* Enhanced floating particles with varied sizes and colors */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const colors = ['bg-primary-cyan/30', 'bg-primary-blue/30', 'bg-primary-purple/30'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <div
              key={i}
              className={`absolute ${color} rounded-full blur-sm`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          );
        })}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
};
