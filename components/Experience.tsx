'use client';

import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { portfolioData } from '@/lib/data';

interface ExperienceProps {
  id: string;
}

export const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const ref = useScrollReveal();

  return (
    <section id={id} className="min-h-screen flex items-center py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary-blue/5 to-transparent"></div>
      
      <div ref={ref} className="max-w-4xl mx-auto w-full scroll-reveal relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        
        <p className="text-gray-400 text-center mb-12">
          My professional journey
        </p>
        
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className="relative"
              style={{
                animation: 'slideUp 0.6s ease-out',
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Timeline line with gradient */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-purple to-primary-cyan md:left-1/2 md:-ml-px"></div>
              )}
              
              {/* Animated timeline dot */}
              <div className="absolute left-4 top-8 md:left-1/2 md:-ml-2">
                <div className="w-4 h-4 rounded-full bg-primary-cyan shadow-lg shadow-primary-cyan/50 animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary-cyan animate-ping opacity-75"></div>
              </div>
              
              <GlassCard 
                className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] hover:scale-105 transition-all duration-300 group" 
                style={{
                  marginLeft: index % 2 === 0 ? '0' : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : '0'
                }}
              >
                {/* Company icon/emoji */}
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                
                <h3 className="text-xl font-bold text-gradient mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-gray-300 mb-2 flex items-center gap-2">
                  <span>🏢</span>
                  {exp.company}
                </h4>
                <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                  <span>📅</span>
                  {exp.duration}
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary-purple/20 text-primary-purple rounded-full border border-primary-purple/30 hover:bg-primary-purple/30 hover:scale-105 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
