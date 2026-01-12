import { Github, ExternalLink, Mail, FileText } from "lucide-react";

/* --- ASSET IMPORTS --- */
// Ensure these files are exactly in src/assets/
import redbiteLogo from "./assets/redbite_logo.png";
import quedLogo from "./assets/Qued_logo.png";
import skillcardLogo from "./assets/skillcard_logo.jpg";
import portfolioLogo from "./assets/portfolio_logo.jpg";
import profile from "./assets/profile.jpeg";


/* --- DATA SECTION --- */
const skillsData = [
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", src: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const projectsData = [
  {
    title: "RedBite",
    // For logos that aren't full screenshots, object-cover will make them look like banners.
    image: redbiteLogo, 
    desc: "A full-stack food delivery website offering seamless ordering, dynamic menus, and real-time updates.",
    link: "https://github.com/CharanKumarKubireddi/RedBite",
    live: "https://red-bite.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Qued",
    image: quedLogo,
    desc: "An interactive online learning platform designed to facilitate accessible education with course management.",
    link: "https://github.com/CharanKumarKubireddi/Qued",
    live: "https://quedonline.netlify.app/",
    tags: ["React", "Full Stack", "Education"]
  },
  {
    title: "Portfolio Website",
    // UPDATED IMAGE: A placeholder that looks more like a dark mode website screenshot
    image: portfolioLogo,
    desc: "A personal portfolio built with React and Tailwind CSS featuring smooth animations and glassmorphism UI.",
    link: "https://github.com/CharanKumarKubireddi/PortFolio.git",
    live: "", 
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Skill Card",
    // UPDATED IMAGE: A placeholder showing UI components
    image: skillcardLogo,
    desc: "A collection of interactive UI components and skill cards featuring hover effects and modern design patterns.",
    link: "https://github.com/CharanKumarKubireddi/SkillCard.git",
    live: "",
    tags: ["HTML", "CSS", "JS", "UI/UX"]
  },
];

export default function Details() {
  return (
    <div className="w-full overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      {/* REDUCED padding top (pt-20 -> pt-16) and gap (gap-12 -> gap-8) */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 md:px-12 pt-16">
        
        {/* Background blobs scaled down slightly */}
        <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 md:max-w-2xl text-center md:text-left space-y-6">
            <div>
              {/* REDUCED font sizes */}
              <h2 className="text-lg md:text-xl font-medium text-blue-400 mb-2">Hello, I am</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tight leading-tight">
                Charan <span className="animate-wave inline-block origin-bottom-right">👋</span>
              </h1>
            </div>
            
            {/* REDUCED subtitle size */}
            <p className="text-xl md:text-2xl font-light text-slate-300">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Full Stack Developer
              </span>
            </p>
            
            {/* REDUCED body text size and max width */}
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Passionate about building scalable web applications with React, Node.js, and modern UI technologies. I turn complex problems into elegant solutions.
            </p>
            
            {/* REDUCED button padding and font size */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
               <a href="#contact" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                 <Mail size={18} /> Hire Me
               </a>
               <a href="#projects" className="px-6 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-base hover:border-slate-400 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                 <FileText size={18} /> View Work
               </a>
            </div>
          </div>

          {/* Image Container - REDUCED max sizes */}
          <div className="flex-1 flex justify-center md:justify-end md:max-w-xl">
            <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <img
                className="relative w-full h-full object-cover rounded-full border-[6px] border-slate-900/80 shadow-2xl animate-float z-10"
                src={profile}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      {/* REDUCED vertical padding (py-24 -> py-20) */}
      <section id="about" className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* REDUCED heading size */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 inline-block">
            About Me
          </h2>
          {/* REDUCED padding and font size inside card */}
          <div className="glass p-8 md:p-12 rounded-3xl text-base md:text-lg text-slate-300 leading-relaxed tracking-wide shadow-2xl">
            <p className="mb-6">
              I’m a <strong className="text-blue-400 font-semibold">Full Stack Developer</strong> dedicated to designing 
              web applications that are both functional and visually stunning. 
              My expertise spans the <strong className="text-purple-400 font-semibold">MERN Stack</strong> (MongoDB, Express, React, Node.js) and 
              <strong className="text-cyan-400 font-semibold"> modern CSS frameworks</strong> like Tailwind.
            </p>
            <p>
              I enjoy solving complex problems, writing clean, maintainable code, and staying updated with the latest industry trends. 
              Beyond coding, I thrive in collaborative environments and love working on projects that drive real value.
            </p>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Tech Stack
          </h2>
          
          {/* REDUCED gap */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
            {skillsData.map((skill, index) => (
              <div 
                key={index}
                /* REDUCED padding (p-8 -> p-6) */
                className="glass-card flex flex-col items-center justify-center p-6 rounded-2xl group hover:-translate-y-2 cursor-pointer border border-white/5 hover:border-blue-500/30"
              >
                {/* REDUCED icon container size (w-24 -> w-20) */}
                <div className="w-20 h-20 mb-4 p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-colors shadow-inner">
                  <img src={skill.src} alt={skill.name} className="w-full h-full object-contain drop-shadow-lg" />
                </div>
                {/* REDUCED text size */}
                <h3 className="text-base font-semibold text-slate-400 group-hover:text-white transition-colors tracking-wide">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {projectsData.map((project, index) => (
              <div key={index} className="group glass-card rounded-3xl overflow-hidden flex flex-col shadow-xl hover:shadow-blue-900/20 transition-all duration-500">
                
                {/* IMAGE FIX: Changed to aspect-video (16:9 ratio) instead of fixed height.
                    Removed bg-white. Used object-cover and object-top. */}
                <div className="aspect-video overflow-hidden relative bg-slate-900/50">
                   <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     // Using object-cover and object-top ensures screenshots look good and fill the space
                     className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                
                {/* REDUCED padding (p-8 -> p-6) */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* REDUCED title size */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  
                  {/* REDUCED tags size and padding */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* REDUCED description size */}
                  <p className="text-slate-400 text-sm md:text-base mb-6 flex-1 leading-relaxed">{project.desc}</p>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      // REDUCED button padding and font size
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:bg-slate-700 hover:border-blue-500 transition-all active:scale-95"
                    >
                      <Github size={18} /> Code
                    </a>
                    
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}