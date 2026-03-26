import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Lakshya Srivastava",
    title: "AI Developer | Full-Stack Engineer | ML Enthusiast",
    description: "I build intelligent systems, machine learning applications, and modern developer tools. Passionate about creating scalable solutions that make a real-world impact.",
    email: "lakshaysrivas2411@gmail.com",
    github: "https://github.com/Lakshya241",
    linkedin: "https://www.linkedin.com/in/lakshya-srivastava-7a36b5336/"
  },
  about: {
    introduction: "I'm an AI developer and full-stack engineer with a passion for building intelligent systems that solve real-world problems. With expertise in machine learning, deep learning, and modern web technologies, I create scalable solutions from concept to deployment. My work spans AI assistants, recommendation systems, computer vision applications, and developer tools that enhance productivity.",
    highlights: [
      { label:"Ready to work", value:"Remote", icon: "code"},
      { label: "Projects Completed", value: "10", icon: "code" },
      { label: "Technologies Mastered", value: "15+", icon: "tools" }
    ]
  },
  projects: [
    {
      id: "ultron-ai",
      title: "Ultron – AI Voice Assistant with Vision & Security",
      description: "Python-based AI voice assistant capable of executing commands, performing web tasks, and interacting using LLM APIs such as Google Gemini. Integrated real-time object detection using OpenCV and webcam input, voice-based authentication with PIN security, and a modular pipeline combining speech-to-text, LLM processing, and text-to-speech. Enables task automation including web search, system commands, and interactive responses.",
      technologies: ["Python", "OpenCV", "SpeechRecognition", "Text-to-Speech", "Google Gemini", "LLM APIs"],
      githubUrl: "https://github.com/Lakshya241/ULTRON.git",
      featured: true
    },
    {
      id: "recommendation-system",
      title: "AI-Based Internship Allocation System",
      description: "AI-driven platform to match candidates from rural areas with relevant internship opportunities based on skill assessment and performance analysis. Features a candidate evaluation system with skill-based tests, automated scoring, and cheating detection mechanisms (activity monitoring, anomaly detection). Allocation logic assigns internships based on candidate performance, skill percentage, and role requirements — focused on improving accessibility for underserved rural populations.",
      technologies: ["Python", "Machine Learning", "Flask", "React", "Web Technologies"],
      githubUrl: "https://github.com/Lakshya241/AI-based-allocation-system.git",
      featured: true
    },
    {
      id: "invisible-finance",
      title: "Invisible Finance – Autonomous Financial Management System",
      description: "MERN-stack financial platform that automates credit evaluation and financial decision-making using behavioral data instead of traditional credit history. Features a dynamic credit scoring system based on user activity patterns, an agentic financial module simulating automated portfolio decisions and liquidity access, JWT authentication with protected routes and idle session timeout, and a modular backend architecture for scalability.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Azure AI Services"],
      githubUrl: "https://github.com/Lakshya241/imagine.git",
      demoUrl: "https://imagine-u59j.vercel.app",
      featured: true
    },
    {
      id: "devsense",
      title: "DevSense – AI-Powered Codebase Assistant",
      description: "AI-driven developer tool that analyzes entire codebases and provides context-aware insights, debugging support, and architecture understanding. Features a FastAPI backend with FAISS vector search for efficient code indexing, multi-LLM architecture supporting Anthropic Claude and Google Gemini, a repository ingestion pipeline for semantic search, and a query engine for asking questions about code structure, dependencies, and logic. Includes dependency analysis, architecture generation, and impact analysis.",
      technologies: ["FastAPI", "React", "FAISS", "Python", "TailwindCSS", "Anthropic Claude", "Google Gemini"],
      githubUrl: "https://github.com/Lakshya241/aws.git",
      demoUrl: "https://aws-oliver.vercel.app",
      featured: true
    },
  ],
  experience: [
    {
      id: "exp-1",
      company: "TechCorp AI Solutions",
      role: "Senior AI Engineer",
      duration: "Jan 2024 - Present",
      description: "Leading the development of enterprise AI solutions for Fortune 500 clients. Architected and deployed machine learning pipelines processing 10M+ daily transactions. Mentoring junior engineers and conducting technical workshops on ML best practices.",
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "Kubernetes", "MLflow"]
    },
    {
      id: "exp-2",
      company: "InnovateLabs",
      role: "Full-Stack Developer",
      duration: "Jun 2023 - Dec 2023",
      description: "Developed and maintained multiple client-facing web applications using modern JavaScript frameworks. Implemented RESTful APIs and GraphQL endpoints serving 100K+ daily active users. Optimized database queries reducing response time by 60%.",
      technologies: ["React", "Next.js", "Node.js", "GraphQL", "PostgreSQL", "MongoDB", "Docker"]
    },
    {
      id: "exp-3",
      company: "DataSoft Solutions",
      role: "Machine Learning Intern",
      duration: "Jan 2023 - May 2023",
      description: "Built predictive models for customer churn analysis achieving 89% accuracy. Developed data preprocessing pipelines handling 5TB+ of data. Created interactive dashboards for business intelligence using Tableau and Python.",
      technologies: ["Python", "Scikit-learn", "Pandas", "SQL", "Tableau", "Apache Spark"]
    },
  ],
  skills: [
    {
      category: "AI / Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Large Language Models", "Transformers", "BERT", "GPT", "Reinforcement Learning"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "FastAPI", "Flask", "Django", "Express.js", "REST APIs", "MongoDB", "MySQL"]
    },
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS","HTML5", "CSS3", "Responsive Design"]
    },
    {
      category: "DevOps & Cloud",
      skills: [ "AWS", "Azure","GitHub Actions", ]
    },
    {
      category: "Data Science & Analytics",
      skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter", "Data Visualization", "Statistical Analysis",]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Linux", "Bash", "VS Code", "Postman", "Figma","SpringBoot"]
    }
  ]
};
