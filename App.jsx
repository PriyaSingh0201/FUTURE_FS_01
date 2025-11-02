import React from "react";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title> - Full Stack Developer | Professional Portfolio</title>
        <meta name="description" content="Priya Singh's professional portfolio showcasing full-stack development skills, projects, and achievements. Expert in React, Node.js, and modern web technologies." />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, JavaScript, Portfolio, Web Development" />
        <meta property="og:title" content="Priya Singh - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Professional portfolio showcasing full-stack development projects and skills" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Priya Singh",
          "jobTitle": "Full Stack Developer",
          "description": "Professional full-stack developer specializing in React and Node.js"
        })}</script>
      </Helmet>
      
      <div>
        {/* Navigation */}
        <nav className="navbar">
          <div className="container">
            <div className="nav-content">
              <div className="logo">
                <div className="logo-icon">PS</div>
                <span>Priya Singh</span>
              </div>
              <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  Hi, I'm <span className="highlight">Priya Singh</span><br />
                  Full Stack Developer
                </h1>
                <p>
                  I create exceptional digital experiences through innovative web development. 
                  Specializing in React, Node.js, and modern technologies to build scalable, 
                  user-friendly applications.
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-primary">View My Work</a>
                  <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
              </div>
              <div className="hero-image">
                <div className="profile-circle">PS</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate full-stack developer with a love for creating innovative solutions
            </p>
            <div className="grid grid-2">
              <div className="card">
                <h3 className="mb-4 font-bold">My Journey</h3>
                <p className="mb-4">
                  I'm a dedicated full-stack developer with a passion for creating exceptional 
                  digital experiences. My journey in web development started with curiosity 
                  and has evolved into a professional career focused on building scalable, 
                  user-centric applications.
                </p>
                <p>
                  I specialize in modern web technologies including React, Node.js, and 
                  various databases. I believe in writing clean, maintainable code and 
                  following best practices to deliver high-quality solutions.
                </p>
              </div>
              <div className="card">
                <h3 className="mb-4 font-bold">What I Do</h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '0.5rem'}}>🚀 Frontend Development</li>
                  <li style={{marginBottom: '0.5rem'}}>⚙️ Backend Development</li>
                  
                 
                  <li style={{marginBottom: '0.5rem'}}>🎨 UI/UX Design</li>
                 
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section bg-gray-50">
          <div className="container">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="grid grid-2">
              <div className="card">
                <h3 className="mb-4 font-bold">Frontend</h3>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>React</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>JavaScript</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>HTML/CSS</span>
                    <span>95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="mb-4 font-bold">Backend</h3>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>Express.js</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">
                    <span>MongoDB</span>
                    <span>75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and personal projects
            </p>
            <div className="grid grid-3">
              <div className="card project-card">
                <div className="project-image ecommerce">
                  <span>🛒 E-Commerce</span>
                </div>
                <h3 className="font-bold mb-4">E-Commerce Platform</h3>
                <p className="mb-4">
                  Full-stack e-commerce solution with React, Node.js, and MongoDB. 
                  Features include user authentication, payment integration, and admin dashboard.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Stripe</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    🔗 Live Demo
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="card project-card">
                <div className="project-image taskmanager">
                  <span>📋 Task Manager</span>
                </div>
                <h3 className="font-bold mb-4">Task Management App</h3>
                <p className="mb-4">
                  Collaborative task management application with real-time updates, 
                  drag-and-drop functionality, and team collaboration features.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Socket.io</span>
                  <span className="tag">Express</span>
                  <span className="tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    🔗 Live Demo
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="card project-card">
                <div className="project-image weather">
                  <span>🌤️ Weather App</span>
                </div>
                <h3 className="font-bold mb-4">Weather Dashboard</h3>
                <p className="mb-4">
                  Beautiful weather application with location-based forecasts, 
                  interactive maps, and detailed weather analytics.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">API Integration</span>
                  <span className="tag">Chart.js</span>
                  <span className="tag">Maps</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    🔗 Live Demo
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="card project-card">
                <div className="project-image" style={{background: 'linear-gradient(135deg, #a8edea, #fed6e3)'}}>
                  <span>📝 Blog CMS</span>
                </div>
                <h3 className="font-bold mb-4">Blog Content Management</h3>
                <p className="mb-4">
                  Modern blog CMS with rich text editor, SEO optimization, 
                  and social media integration for content creators.
                </p>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">Strapi</span>
                  <span className="tag">GraphQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    🔗 Live Demo
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="card project-card">
                <div className="project-image" style={{background: 'linear-gradient(135deg, #ffecd2, #fcb69f)'}}>
                  <span>📊 Analytics Dashboard</span>
                </div>
                <h3 className="font-bold mb-4">Analytics Dashboard</h3>
                <p className="mb-4">
                  Real-time analytics dashboard with interactive charts, 
                  data visualization, and comprehensive reporting features.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">D3.js</span>
                  <span className="tag">Node.js</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    🔗 Live Demo
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="card project-card">
                <div className="project-image" style={{background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)'}}>
                  <span>🎮 Game Hub</span>
                </div>
                <h3 className="font-bold mb-4">Gaming Platform</h3>
                <p className="mb-4">
                  Interactive gaming platform with multiplayer support, 
                  leaderboards, and real-time game state management.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Socket.io</span>
                  <span className="tag">Redis</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    🔗 Live Demo
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section bg-gray-50">
          <div className="container">
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle">
              My professional journey, education, and achievements
            </p>
            <div className="grid grid-2">
              <div className="card">
                <h3 className="font-bold mb-4">Experience</h3>
                <div className="mb-6">
                  <h4 className="font-semibold">Full Stack Developer Intern</h4>
                  <p className="text-blue-600 font-semibold">Future Interns</p>
                  <p style={{color: '#666', fontSize: '0.9rem'}}>2024 - Present</p>
                  <p className="mt-4">
                    Developing modern web applications using React, Node.js, and MongoDB. 
                    Implementing responsive designs and optimizing application performance.
                  </p>
                </div>
              </div>
              <div className="card">
                <h3 className="font-bold mb-4">Education</h3>
                <div className="mb-6">
                  <h4 className="font-semibold">Bachelor of Technology</h4>
                  <p className="text-blue-600 font-semibold">Computer Science</p>
                  <p style={{color: '#666', fontSize: '0.9rem'}}>2021 - 2025</p>
                  <p className="mt-4">
                    Relevant coursework: Data Structures, Algorithms, Database Systems, 
                    Web Development, Software Engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
            <div className="grid grid-2">
              <div className="card">
                <h3 className="font-bold mb-4">Let's Connect</h3>
                <p className="mb-6">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and development.
                </p>
                <div style={{marginBottom: '1rem'}}>
                  <strong>📧 Email:</strong> your.email@example.com
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <strong>📱 Phone:</strong> +91 12345 67890
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <strong>📍 Location:</strong> India
                </div>
              </div>
              <div className="card">
                <h3 className="font-bold mb-4">Send Message</h3>
                <form>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="your.email@example.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-input form-textarea" placeholder="Tell me about your project..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div>
                <div className="logo" style={{color: 'white', marginBottom: '1rem'}}>
                  <div className="logo-icon">PS</div>
                  <span>Priya Singh</span>
                </div>
                <p style={{color: '#9ca3af'}}>
                  Full Stack Developer passionate about creating exceptional digital experiences.
                </p>
              </div>
              <div>
                <h4 style={{marginBottom: '1rem'}}>Quick Links</h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '0.5rem'}}><a href="#about" style={{color: '#9ca3af', textDecoration: 'none'}}>About</a></li>
                  <li style={{marginBottom: '0.5rem'}}><a href="#skills" style={{color: '#9ca3af', textDecoration: 'none'}}>Skills</a></li>
                  <li style={{marginBottom: '0.5rem'}}><a href="#projects" style={{color: '#9ca3af', textDecoration: 'none'}}>Projects</a></li>
                  <li style={{marginBottom: '0.5rem'}}><a href="#contact" style={{color: '#9ca3af', textDecoration: 'none'}}>Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2024 Priya Singh. All rights reserved. Built with ❤️ using React</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}