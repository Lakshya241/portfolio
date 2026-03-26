# Developer Portfolio

A modern, animated portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark theme with glassmorphism design
- ✨ Smooth scroll animations and transitions
- 🎭 3D card tilt effects
- 💫 Animated counters and progress indicators
- 🌊 Parallax scrolling effects
- 📱 Fully responsive design
- ⚡ Optimized performance
- ♿ Accessibility-friendly

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Update your personal information in `lib/data.ts`

4. Add your resume PDF to `public/resume.pdf`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal details (name, title, description)
- Contact information (email, GitHub, LinkedIn)
- Projects
- Work experience
- Skills

### Modify Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    blue: '#3b82f6',
    purple: '#8b5cf6',
    cyan: '#06b6d4'
  }
}
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS Transitions & Keyframes
- **Icons**: SVG

## License

MIT License - feel free to use this template for your own portfolio!
