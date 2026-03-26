'use client';

import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { portfolioData } from '@/lib/data';

interface SkillsProps {
  id: string;
}

const SkillBadge: React.FC<{ skill: string; index: number }> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className="px-4 py-2 bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 text-white rounded-lg border border-primary-cyan/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-cyan/30 cursor-default relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: 'scaleIn 0.4s ease-out',
        animationDelay: `${index * 0.05}s`,
        animationFillMode: 'both'
      }}
    >
      {/* Shimmer effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 ${isHovered ? 'animate-shimmer' : ''}`}></div>
      
      <span className="relative z-10">{skill}</span>
      
      {/* Glow effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-primary-cyan/20 blur-xl animate-pulse"></div>
      )}
    </span>
  );
};

export const Skills: React.FC<SkillsProps> = ({ id }) => {
  const ref = useScrollReveal();

  return (
    <section id={id} className="min-h-screen flex items-center py-20 px-4 relative">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div ref={ref} className="max-w-6xl mx-auto w-full scroll-reveal relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <p className="text-gray-400 text-center mb-12">
          Hover over skills to see the magic ✨
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="glass rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              style={{
                animation: 'slideUp 0.6s ease-out',
                animationDelay: `${categoryIndex * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <h3 className="text-2xl font-bold text-gradient mb-4 flex items-center gap-2">
                <span className="text-3xl">
                  {categoryIndex === 0 && '🤖'}
                  {categoryIndex === 1 && '⚙️'}
                  {categoryIndex === 2 && '🎨'}
                  {categoryIndex === 3 && '🛠️'}
                </span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
