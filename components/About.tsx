'use client';

import React, { useState, useEffect, useRef } from 'react';
import { GlassCard } from './ui/GlassCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { portfolioData } from '@/lib/data';

interface AboutProps {
  id: string;
}

const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({ 
  value, 
  duration = 2000,
}) => {
  const numericPart = parseInt(value.replace(/\D/g, ''));
  const isNumeric = !isNaN(numericPart);
  const suffix = isNumeric ? value.replace(/\d/g, '') : '';

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || !isNumeric) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * numericPart));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, numericPart, isNumeric, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-gradient">
      {isNumeric ? `${count}${suffix}` : value}
    </div>
  );
};

export const About: React.FC<AboutProps> = ({ id }) => {
  const ref = useScrollReveal();
  const { introduction, highlights } = portfolioData.about;

  return (
    <section id={id} className="min-h-screen flex items-center py-20 px-4 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-10"></div>
      
      <div ref={ref} className="max-w-6xl mx-auto w-full scroll-reveal relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          {introduction}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <GlassCard 
              key={index} 
              className="text-center transform transition-all duration-500 hover:scale-105"
              style={{
                animation: 'slideUp 0.6s ease-out',
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <AnimatedCounter value={highlight.value} />
              <div className="text-gray-300 mt-2 text-lg">
                {highlight.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
