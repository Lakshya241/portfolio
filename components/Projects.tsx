'use client';

import React, { useState, useRef } from 'react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { portfolioData } from '@/lib/data';

interface ProjectsProps {
  id: string;
}

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-tilt"
      style={{
        animation: 'slideUp 0.6s ease-out',
        animationDelay: `${index * 0.2}s`,
        animationFillMode: 'both',
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <GlassCard hover className="flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-3 text-gradient">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span 
              key={techIndex}
              className="px-3 py-1 text-sm bg-primary-blue/20 text-primary-cyan rounded-full border border-primary-cyan/30 hover:bg-primary-blue/30 hover:scale-105 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="primary" 
            href={project.githubUrl}
            className="flex-1 text-center"
          >
            GitHub
          </Button>
          {project.demoUrl && (
            <Button 
              variant="outline" 
              href={project.demoUrl}
              className="flex-1 text-center"
            >
              Demo
            </Button>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const ref = useScrollReveal();

  return (
    <section id={id} className="min-h-screen flex items-center py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-purple/5 to-transparent"></div>
      
      <div ref={ref} className="max-w-6xl mx-auto w-full scroll-reveal relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <p className="text-gray-400 text-center mb-12">
          Hover over cards to see the 3D effect
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
