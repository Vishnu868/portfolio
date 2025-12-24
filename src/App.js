// Portfolio.jsx
// Professional portfolio with dynamic GitHub projects

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X } from "lucide-react";
import { motion, AnimatePresence  } from "framer-motion";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 🔹 GitHub projects state
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⭐ Highlighted projects (match repo names exactly)
  const FEATURED_PROJECTS = [
    "plant-disease-detection",
    "emotion-recognition",
    "obstacle-avoiding-robot",
    "ecommerce-website",
  ];
  const SkillCard = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="rounded-xl border border-gray-800 bg-[#0f1624] p-6 hover:border-blue-500/40 transition"
  >
    <h3 className="text-lg font-semibold text-blue-300 mb-4">
      {title}
    </h3>

    <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-400" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Fetch GitHub repositories
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/Vishnu868/repos?sort=updated&per_page=100"
        );
        const data = await res.json();

        const filtered = data.filter(
          (repo) => !repo.fork && repo.description
        );

        setRepos(filtered);
      } catch (err) {
        console.error("GitHub fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skills = {
    Programming: ["Python", "C++"],
    "AI & Machine Learning": ["Machine Learning", "Deep Learning", "CNN, LSTM, Transformers"],
    "Computer Vision": ["OpenCV", "Image Classification"],
    "Web & Deployment": ["React", "Node.js", "Flask"],
    "Frameworks & Tools": ["PyTorch", "TensorFlow", "Scikit-learn"],
    Specializations: ["IoT-based AI Systems", "Robotics", "Model Deployment"],
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-gray-200 font-sans">
      {/* NAVBAR */}
      {/* NAVBAR */}
<nav className="fixed top-0 w-full z-50 bg-[#0b0f14]/80 backdrop-blur border-b border-gray-800">
  <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Logo */}
    <span
      onClick={() => scrollTo("home")}
      className="text-xl font-bold text-blue-400 cursor-pointer"
    >
      VV
    </span>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-8 text-sm">
      {["Home", "Projects", "Experience", "Skills", "Education", "Contact"].map((item) => {
        const id = item.toLowerCase();
        const isActive = activeSection === id;

        return (
          <button
            key={item}
            onClick={() => scrollTo(id)}
            className={`relative transition-colors duration-300 ${
              isActive ? "text-blue-400" : "text-gray-400 hover:text-blue-400"
            }`}
          >
            {item}

            {/* Active underline */}
            {isActive && (
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded"
              />
            )}
          </button>
        );
      })}
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-gray-300 hover:text-white transition"
      onClick={() => setIsMenuOpen(true)}
      aria-label="Open menu"
    >
      <Menu size={22} />
    </button>
  </div>

  {/* Mobile Drawer */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-screen w-64 bg-[#0b0f14] border-l border-gray-800 z-50"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-800">
          <span className="text-lg font-bold text-blue-400">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-6 py-6 gap-5 text-sm">
          {["Home", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-gray-400 hover:text-blue-400 transition text-left"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>



{/* HERO */}
<section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden"
>
  {/* Floating background glow */}
  <motion.div
    className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
    animate={{
      x: [0, 40, -30, 0],
      y: [0, -30, 40, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Floating Visual Tiles (Desktop only) */}
  <div className="hidden lg:block pointer-events-none">
    {/* Top Left */}
    <motion.img
      src="/assets/ai.png"
      alt="Computer Vision"
      className="absolute top-32 left-16 w-56 rounded-xl opacity-30 shadow-lg"
      animate={{ y: [0, -20, 0], rotate: [-2, 0, -2] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Top Right */}
    <motion.img
      src="/assets/ml.jpg"
      alt="Deep Learning"
      className="absolute top-28 right-20 w-60 rounded-xl opacity-30 shadow-lg"
      animate={{ y: [0, 25, 0], rotate: [2, 0, 2] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Bottom Left */}
    <motion.img
      src="/assets/iot.jpg"
      alt="IoT Systems"
      className="absolute bottom-28 left-24 w-64 rounded-xl opacity-30 shadow-lg"
      animate={{ y: [0, 30, 0], rotate: [1, -1, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Bottom Right */}
    <motion.img
      src="/assets/thumbs.png"
      alt="Robotics"
      className="absolute bottom-24 right-24 w-56 rounded-xl opacity-30 shadow-lg"
      animate={{ y: [0, -25, 0], rotate: [-1, 1, -1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  {/* Hero Content */}
  <motion.div
    animate={{ scale: [1, 1.015, 1] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="max-w-4xl text-center relative z-10"
  >
    {/* Name */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-5xl md:text-6xl font-extrabold mb-4 
                 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400
                 bg-[length:200%_200%] bg-clip-text text-transparent
                 animate-[gradientMove_10s_ease_infinite]"
    >
      Vishnu Vardhan
    </motion.h1>

    {/* Role */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      className="text-xl text-gray-300 mb-2"
    >
      Interested in Applied AI & Intelligent Systems
    </motion.p>

    {/* Focus Line */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-gray-400 mb-8"
    >
    Deep Learning • Intelligent Systems • IoT-AI Integration
    </motion.p>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.45 }}
      className="max-w-2xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed"
    >
      Designing and deploying applied AI systems,
      multimodal learning, and real-world intelligent applications across web,
      robotics, and IoT domains.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-wrap justify-center gap-4"
    >
      <a
        href="https://github.com/Vishnu868"
        target="_blank"
        className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 
                   transition-all duration-300 hover:scale-[1.04]"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/vishnu8686"
        target="_blank"
        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 
                   transition-all duration-300 hover:scale-[1.04]"
      >
        LinkedIn
      </a>
    </motion.div>
  </motion.div>
</section>




{/* PROJECTS */}
<section id="projects" className="py-20 px-6 bg-[#111827]">
  <div className="max-w-6xl mx-auto">

    {/* Section Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-3xl font-bold mb-10 text-blue-400"
    >
      Projects
    </motion.h2>

    {loading ? (
      <p className="text-gray-400">Loading projects from GitHub...</p>
    ) : (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="
          grid 
          grid-cols-2            /* mobile: 2 small boxes side-by-side */
          gap-4 
          md:grid-cols-2         /* desktop unchanged */
          md:gap-6
        "
      >
        {repos.map((repo) => {
          const isFeatured = FEATURED_PROJECTS.includes(repo.name);

          return (
            <motion.div
              key={repo.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`
                relative rounded-xl border bg-[#0b0f14] transition-colors duration-300
                p-4 sm:p-5 md:p-6
                flex flex-col justify-between
                ${isFeatured
                  ? "border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.08)]"
                  : "border-gray-800 hover:border-blue-500/40"}
              `}
            >
              {/* Featured badge (desktop only) */}
              {isFeatured && (
                <span className="hidden md:block absolute top-4 right-4 text-xs text-blue-400 uppercase tracking-wide">
                  Featured
                </span>
              )}

              {/* Project Title */}
              <h3
                className="
                  text-sm sm:text-base md:text-xl
                  font-semibold text-blue-300
                  mb-1 md:mb-2
                  text-center md:text-left
                  line-clamp-2
                "
              >
                {repo.name.replace(/-/g, " ")}
              </h3>

              {/* Description (desktop only) */}
              <p className="hidden md:block text-gray-300 mb-4 leading-relaxed">
                {repo.description}
              </p>

              {/* Footer */}
              <div
                className="
                  flex items-center justify-center md:justify-between
                  text-xs md:text-sm mt-2 md:mt-0
                "
              >
                <span className="text-gray-400 hidden sm:block md:block">
                  {repo.language || "Multi-tech"}
                </span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
                >
                  <span className="hidden md:inline">View Code</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    )}
  </div>
</section>


{/* EXPERIENCE */}
<section id="experience" className="py-24 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Two-column resume layout */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

      {/* LEFT: Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold text-blue-400 md:col-span-1"
      >
        Experience
      </motion.h2>
<br/>
      {/* RIGHT: Content */}
      <div className="lg:ml-60 sm:ml-0 md:col-span-3 relative pl-6 border-l border-gray-700 space-y-12">

        {/* Internship */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-blue-300">
            Web Development Intern
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Jan 2025 – May 2025
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
            <li>Developed responsive web interfaces using React and modern UI practices.</li>
            <li>Integrated REST APIs and optimized frontend performance.</li>
            <li>Collaborated with designers and backend developers in an agile setup.</li>
          </ul>
        </motion.div>

        {/* Freelance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-blue-300">
            Freelance Web Developer
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Jun 2024 – Present
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
            <li>Delivered complete websites from requirement gathering to deployment.</li>
            <li>Built scalable frontend systems using React and backend APIs.</li>
            <li>Improved client UX, performance, and responsiveness.</li>
          </ul>
        </motion.div>

        {/* AI Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-300">
            AI & Machine Learning Projects
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Academic & Independent Work
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
            <li>Built computer vision and multimodal learning models.</li>
            <li>Worked with CNN, LSTM, and Transformer architectures.</li>
            <li>Implemented real-world systems like plant disease detection.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  </div>
</section>
{/* SKILLS */}
{/* SKILLS */}
<section id="skills" className="py-24 px-6 bg-[#0b0f14]">
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-3xl font-bold mb-12 text-blue-400"
    >
      Skills
    </motion.h2>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Programming Languages */}
      <SkillCard
        title="Programming Languages"
        items={["Python", "C", "C++", "SQL", "JavaScript"]}
      />

      {/* Computer Vision */}
      <SkillCard
        title="Computer Vision"
        items={[
          "OpenCV",
          "Image Classification",
          "Object Detection",
          "Image Segmentation",
          "Video Processing",
        ]}
      />

      {/* AI Frameworks & Libraries */}
      <SkillCard
        title="AI Frameworks & Libraries"
        items={[
          "TensorFlow",
          "Keras",
          "PyTorch",
          "Scikit-learn",
          "NumPy, Pandas",
          "Matplotlib, Seaborn",
          "MediaPipe",
        ]}
      />

      {/* Robotics & IoT */}
      <SkillCard
        title="Robotics & IoT"
        items={[
          "Arduino",
          "ESP32 / ESP8266",
          "Sensors & Actuators",
          "Embedded Systems",
          "Hardware–Software Integration",
        ]}
      />

      {/* Web Development */}
      <SkillCard
        title="Web Development"
        items={[
          "HTML, CSS, JavaScript",
          "React.js",
          "Tailwind CSS",
          "Responsive Design",
        ]}
      />

      {/* Backend & APIs */}
      <SkillCard
        title="Backend & APIs"
        items={[
          "Node.js",
          "Express.js",
          "Flask",
          "RESTful APIs",
        ]}
      />

      {/* Databases & Cloud */}
      <SkillCard
        title="Databases & Cloud"
        items={[
          "MySQL",
          "MongoDB",
          "Firebase",
          "Cloudinary",
          "Deployment & Hosting",
        ]}
      />

      {/* Tools & Platforms */}
      <SkillCard
        title="Tools & Platforms"
        items={[
          "Git & GitHub",
          "VS Code",
          "Jupyter Notebook",
          "Google Colab",
          "Linux",
        ]}
      />
    </div>
  </div>
</section>

{/* EDUCATION */}
<section id="education" className="py-24 px-6 ">
  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col md:flex-row gap-12">

      {/* LEFT: Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold text-blue-400 md:w-48 shrink-0"
      >
        Education
      </motion.h2>

      {/* RIGHT: Education content */}
      <div className="space-y-8 text-gray-300">

        <div>
          <h3 className="text-xl font-semibold text-blue-300">
            B.Tech in Artificial Intelligence & Machine Learning
          </h3>
          <p className="text-sm text-gray-400">
            Amrita Vishwa Vidyapeetham — 3rd Year
          </p>
          <p className="mt-1">
            CGPA: <span className="font-medium">7.23</span>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-300">
            Class XII
          </h3>
          <p className="text-sm text-gray-400">
            Sri Chaitanya College, Hyderabad
          </p>
          <p className="mt-1">
            Percentage: <span className="font-medium">96%</span>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-300">
            Class X
          </h3>
          <p className="text-sm text-gray-400">
            Bhashyam High School, State Board
          </p>
          <p className="mt-1">
            Percentage: <span className="font-medium">100%</span>
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
{/* CONTACT */}
{/* CONTACT */}
<section id="contact" className="py-24 px-6 bg-[#111827]">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="max-w-7xl mx-auto"
  >
    {/* Heading */}
    <h2 className="text-4xl font-bold mb-4 text-blue-400">
      Contact
    </h2>

    {/* Subtitle */}
    <p className="text-gray-300 mb-12 max-w-2xl leading-relaxed">
      I’m open to internships, research roles, and AI-focused engineering
      opportunities. Feel free to reach out for collaboration or discussion.
    </p>

    {/* Contact Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

      {/* Email */}
      <motion.a
        href="mailto:medaramvishnu7@gmail.com"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative rounded-xl overflow-hidden 
                   p-6 sm:p-8 lg:p-12 
                   border border-gray-800 
                   min-h-[200px] sm:min-h-[220px] lg:min-h-[260px] 
                   hover:border-blue-400/50 transition"
      >
        <img
          src="/assets/email-marketing-roi-2.jpg"
          alt="Email"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div className="relative z-10 
                        p-6 sm:p-8 lg:p-10 
                        h-full flex flex-col justify-center">
          <Mail size={28} className="text-blue-400 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            Email
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
            Reach out directly for opportunities, collaborations, or discussions.
          </p>
        </div>
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/Vishnu868"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative rounded-xl overflow-hidden 
                   p-6 sm:p-8 lg:p-12 
                   border border-gray-800 
                   min-h-[200px] sm:min-h-[220px] lg:min-h-[260px] 
                   hover:border-blue-400/50 transition"
      >
        <img
          src="/assets/git.png"
          alt="GitHub"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div className="relative z-10 
                        p-6 sm:p-8 lg:p-10 
                        h-full flex flex-col justify-center">
          <Github size={28} className="text-blue-400 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            GitHub
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
            Explore my projects, experiments, and open-source contributions.
          </p>
        </div>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/vishnu8686"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative rounded-xl overflow-hidden 
                   p-6 sm:p-8 lg:p-12 
                   border border-gray-800 
                   min-h-[200px] sm:min-h-[220px] lg:min-h-[260px] 
                   hover:border-blue-400/50 transition"
      >
        <img
          src="/assets/linkedin.jpg"
          alt="LinkedIn"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div className="relative z-10 
                        p-6 sm:p-8 lg:p-10 
                        h-full flex flex-col justify-center">
          <Linkedin size={28} className="text-blue-400 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            LinkedIn
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
            Connect with me professionally and follow my career journey.
          </p>
        </div>
      </motion.a>

    </div>
  </motion.div>
</section>







      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2025 Vishnu Vardhan
      </footer>
    </div>
  );
}
