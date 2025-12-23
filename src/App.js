import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Menu, X, Code, Brain, Eye, Server, Cpu, Award } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    'Programming': ['Python', 'C++'],
    'AI / ML / DL': ['Machine Learning', 'Deep Learning', 'CNN, LSTM, Transformers', 'Predictive Analytics'],
    'Computer Vision': ['OpenCV', 'Image Classification'],
    'Web & Deployment': ['React', 'Node.js', 'Flask'],
    'Frameworks & Tools': ['PyTorch', 'TensorFlow', 'Scikit-learn'],
    'Specializations': ['IoT-based AI Systems', 'Model Deployment', 'Robotics', 'UI/UX Design']
  };

  const projects = [
    {
      title: 'Emotion Recognition using Multi-Modal Deep Learning',
      description: 'Designed a CNN-LSTM-Transformer architecture for emotion recognition using EEG, physiological, and eye-tracking data. Implemented Transformer-based fusion to learn cross-modal relationships.',
      tech: ['CNN', 'LSTM', 'GRU', 'Transformer', 'PyTorch'],
      github: 'https://github.com/Vishnu868',
      highlight: true
    },
    {
      title: 'Plant Disease Detection (IoT + ML)',
      description: 'Deep learning–based plant disease detection system using image classification. Integrated IoT sensors for environmental monitoring and deployed the system for real-time on-field alerts.',
      tech: ['Python', 'Deep Learning', 'OpenCV', 'IoT'],
      github: 'https://github.com/Vishnu868'
    },
    {
      title: 'Obstacle-Avoiding Robot',
      description: 'Built an autonomous rover using Raspberry Pi with ultrasonic sensors and camera. Implemented sensor fusion, path optimization, and kinematic control with Bluetooth and voice-controlled modes.',
      tech: ['Raspberry Pi', 'Robotics', 'Sensors', 'Python'],
      github: 'https://github.com/Vishnu868'
    },
    {
      title: 'Friend Recommendation System',
      description: 'Machine learning-based recommendation system using collaborative filtering and user behavior analysis.',
      tech: ['Python', 'ML', 'Data Analysis'],
      github: 'https://github.com/Vishnu868'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Built responsive e-commerce websites for branding and clothing with full-stack functionality, payment integration, and modern UI/UX.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Vishnu868'
    },
    {
      title: 'Proxy Server',
      description: 'Custom proxy server implementation with caching and request filtering capabilities.',
      tech: ['Node.js', 'Networking'],
      github: 'https://github.com/Vishnu868'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              VV
            </span>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Vishnu Vardhan
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-2">AI & ML Engineer</p>
            <p className="text-lg text-gray-400">Computer Vision | IoT | Full-Stack Developer</p>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building intelligent, data-driven systems by combining Deep Learning, IoT, and Full-Stack development.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Vishnu868"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu8686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a B.Tech student specializing in Artificial Intelligence and Machine Learning at Amrita Vishwa Vidyapeetham. I work on real-world AI systems that combine deep learning, computer vision, IoT, and automation. My interests include deploying ML models, building intelligent robotics systems, and creating scalable full-stack applications that solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                <div className="space-y-2">
                  {items.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`bg-gray-800 rounded-xl p-6 border transition-all hover:scale-105 ${
                  project.highlight
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                    : 'border-gray-700 hover:border-blue-500'
                }`}
              >
                {project.highlight && (
                  <div className="inline-block px-3 py-1 bg-blue-600 text-xs rounded-full mb-3">
                    ⭐ Research-Level
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github size={18} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Web Development Intern</h3>
                  <p className="text-gray-400">Jan 2025 – May 2025</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Front-end development using React & JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>API integration and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Collaborative team development</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Freelance Web Developer</h3>
                  <p className="text-gray-400">Jun 2024 – Present</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Built responsive websites & web applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>UI/UX design and branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>E-commerce platform development</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Member – Tensor Web Team</h3>
                  <p className="text-gray-400">Amrita Vishwa Vidyapeetham</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>University web development projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">B.Tech in Artificial Intelligence & Machine Learning</h3>
            <p className="text-xl text-gray-300 mb-4">Amrita Vishwa Vidyapeetham</p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Current Year</p>
                <p className="text-2xl font-bold text-blue-400">3rd Year</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">CGPA</p>
                <p className="text-2xl font-bold text-blue-400">7.23</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Class XII</p>
                <p className="text-2xl font-bold text-blue-400">96%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's collaborate on building intelligent systems and innovative solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:medaramvishnu7@gmail.com"
              className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <Mail className="text-blue-400" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-gray-200">medaramvishnu7@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+918686809709"
              className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <Phone className="text-blue-400" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-gray-200">+91 8686809709</p>
              </div>
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/Vishnu868"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishnu8686"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© 2025 Vishnu Vardhan. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}