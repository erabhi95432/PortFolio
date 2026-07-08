import { useState, useEffect } from 'react';
import developerImg from './assets/developer.png';

// Icon Components (Inline SVGs)
const GithubIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 721 192 888.4 369.6 947.4c22.4 4.1 30.6-9.7 30.6-21.6 0-10.7-.4-39-39-39-76.4 0-112.5-47.5-121.6-90.8-12.2-31.2-47-90.8-47-90.8-29.6-16.2-2.1-15.8-2.1-15.8 32.7 2.3 50 33.6 50 33.6 27.2 46.5 71.3 33.1 88.6 25.3 2.7-19.7 10.6-33.1 19.3-40.7-183.1-20.8-375.5-91.5-375.5-407 0-90 32.1-163.6 84.8-221.3-8.5-20.8-36.7-104.6 8-218.2 0 0 69.2-22.1 226.7 84.6 65.8-18.3 136.3-27.5 206.3-27.8 70 .3 140.5 9.5 206.3 27.8 157.5-106.7 226.7-84.6 226.7-84.6 44.7 113.6 16.5 197.4 8 218.2 52.7 57.7 84.8 131.3 84.8 221.3 0 316.3-192.7 385.9-376.4 406.3 29.5 25.4 55.8 75.7 55.8 152.6 0 110.2-1 199.1-1 226.1 0 12 8.1 25.9 30.8 21.5C832 888.3 960 720.9 960 523.5 960 276.4 759.7 76.3 511.6 76.3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM348.3 783.6H230.9V401.4h117.4v382.2zm-58.7-433c-37.6 0-68-30.4-68-68.1s30.4-68.1 68-68.1 68 30.4 68 68.1-30.4 68.1-68 68.1zm504.3 433H676.5V599.6c0-43.8-.8-100.2-61.1-100.2-61.1 0-70.5 47.7-70.5 97v187.2H427.5V401.4h112.7v52.2h1.6c15.7-29.7 54-61 111.1-61 118.8 0 140.7 78.2 140.7 179.9v211.1z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const UserIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CodeIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const BriefcaseIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const ArrowUpIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

// Skills SVGs
const HtmlSvg = () => (
  <svg fill="#e34f26" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 15.6l.4-4.8H8.3l-.2-2.5h8.2L16.6 6H5.4l.6 7.1h7.3l-.3 3-2.7.7-2.7-.7-.2-1.9H5.2l.3 4 6.5 1.8 6.5-1.8.3-2.1z"/>
  </svg>
);

const CssSvg = () => (
  <svg fill="#1572b6" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.6 13.5l.3-3.6H8.3L8.1 7.4h8.9L17.2 4H5.2l.6 6.5h7.5l-.3 3.1-3 1-3-1-.2-1.9H5l.3 3.6 6.7 2.2 6.7-2.2.2-2.2z"/>
  </svg>
);

const JsSvg = () => (
  <svg fill="#f7df1e" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0V0zm20 18.2c-.4-.9-.8-1.5-1.7-1.5-.7 0-1.1.3-1.1.8 0 .5.3.7 1.1 1.1 1.7.7 2.8 1.4 2.8 3.5 0 2.2-1.7 3.9-4.3 3.9-2.5 0-3.9-1.2-4.6-2.7l1.7-1.1c.4.7.9 1.2 1.7 1.2.9 0 1.3-.4 1.3-1 0-.7-.4-.9-1.4-1.3-1.7-.7-2.6-1.5-2.6-3.4 0-1.8 1.4-3.3 3.8-3.3 1.9 0 3.3.9 4 2.3L20 18.2zm-9.3-1.6v8.4H8.3v-8.4H5.9v-1.7h7.2v1.7h-2.4z" transform="scale(0.85) translate(2, 2)"/>
  </svg>
);

const TsSvg = () => (
  <svg fill="#3178c6" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"/>
  </svg>
);

const ReactSvg = () => (
  <svg fill="#61dafb" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12c0-1.2-.8-2.6-2.1-4-1.6-1.8-3.9-3.3-6.6-4.2-2-1.3-4-2-5.7-2-1.7 0-3 .7-3.7 2-1.3.8-2.6 1.8-3.8 3.2C.8 8.6 0 10.3 0 12c0 1.2.8 2.6 2.1 4 1.6 1.8 3.9 3.3 6.6 4.2 2 1.3 4 2 5.7 2 1.7 0 3-.7 3.7-2 1.3-.8 2.6-1.8 3.8-3.2 1.3-1.6 2.1-3.3 2.1-5zm-12.7 0c0-.5.2-1 .5-1.5.8-1.1 2.3-1.9 3.9-1.9 1.6 0 2.6.8 2.6 1.9s-1 1.9-2.6 1.9c-1.6 0-3.1-.8-3.9-1.9-.3-.5-.5-1-.5-1.5zm8.5-2.4c.5.8.8 1.6.8 2.4s-.3 1.6-.8 2.4c-.4.6-1 1.2-1.8 1.8.2-.8.3-1.6.3-2.4s-.1-1.6-.3-2.4c.8.6 1.4 1.2 1.8 1.8zm-15.6 4.8c-.5-.8-.8-1.6-.8-2.4s.3-1.6.8-2.4c.4-.6 1-1.2 1.8-1.8-.2.8-.3 1.6-.3 2.4s.1 1.6.3 2.4c-.8-.6-1.4-1.2-1.8-1.8z"/>
  </svg>
);

const NodeSvg = () => (
  <svg fill="#339933" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 21.6v-9.2L3.5 8v8l8.5 5.6zm8.5-5.6v-8L12 12.4v9.2l8.5-5.6z"/>
  </svg>
);

const ExpressSvg = () => (
  <span style={{ fontSize: '12px', fontWeight: '800', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '3px', padding: '0 4px', textTransform: 'uppercase' }}>ex</span>
);

const MongoSvg = () => (
  <svg fill="#47a248" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C7.2 0 5 4.5 5 8.7c0 3.3 1.7 6.4 4.5 8.8.7.6.9 1 .9 1.7v3.1c0 .8.6 1.4 1.4 1.4.1 0 .2 0 .3-.1l1.5-.7c.8-.4 1.7-.6 2.6-.6h.5c.8 0 1.4-.6 1.4-1.4v-3.7c0-.7.2-1 .9-1.7 2.8-2.4 4.5-5.5 4.5-8.8C24 4.5 21.8 0 17 0h-5zm0 18.2c-.4 0-.8-.3-.8-.8v-9.5c0-.4.3-.8.8-.8s.8.3.8.8v9.5c0 .5-.4.8-.8.8z"/>
  </svg>
);

const GitSvg = () => (
  <svg fill="#f05032" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.7 3.6l3.4 3.4c.8-.3 1.8-.1 2.4.6.6.6.8 1.5.6 2.3l3.3 3.3c.8-.2 1.7 0 2.3.6.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.8-1.5-.6-2.3L13.9 11c-.2.8-1 1.4-1.9 1.4-.9 0-1.7-.6-1.9-1.4L6.8 14.3c.2.8 0 1.7-.6 2.3-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9.6-.6 1.5-.8 2.3-.6l3.3-3.3c-.3-.8-.1-1.8.6-2.4l-3.4-3.4-5.4 5.4c-.4.4-.4 1.1 0 1.5l10.2 10.2c.4.4 1.1.4 1.5 0l10.2-10.2c.5-.4.5-1.1 0-1.5z"/>
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Monitor Scroll to set active Section in Header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill in all the fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('API Error:', error);
      setStatus({ type: 'error', text: 'Unable to contact the server. Please check if backend is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header / Navbar */}
      <header>
        <div className="container nav-container">
          <a href="#home" className="logo">
            Abhi <span>Kumar</span>
          </a>
          <ul className="nav-menu">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setActiveSection('about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveSection('skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveSection('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveSection('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="container" id="home">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-subtitle">Hi, I'm</span>
              <h1 className="hero-title">
                Abhi Kumar
                <span>MERN Stack Developer</span>
              </h1>
              <p className="hero-description">
                I build modern, responsive and user-friendly web applications using the MERN stack.
              </p>
              
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View Projects 🚀
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub <GithubIcon />
                </a>
              </div>

              <div className="hero-socials">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a href="mailto:abhikumar@example.com" className="social-icon" aria-label="Email">
                  <EmailIcon />
                </a>
              </div>
            </div>
            
            <div className="hero-image-wrapper">
              <img 
                src={developerImg} 
                alt="Abhi Kumar - MERN Stack Developer" 
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* About Me Card */}
        <section id="about" className="section-card">
          <div className="section-header">
            <div className="section-icon-bg">
              <UserIcon />
            </div>
            <h2 className="section-title">About Me</h2>
          </div>
          <p className="about-text">
            I am a passionate MERN Stack Developer who loves building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world solutions using code.
          </p>
        </section>

        {/* Skills Card */}
        <section id="skills" className="section-card">
          <div className="section-header">
            <div className="section-icon-bg">
              <CodeIcon />
            </div>
            <h2 className="section-title">Skills</h2>
          </div>
          
          <div className="skills-grid">
            <div className="skill-tag">
              <HtmlSvg /> HTML
            </div>
            <div className="skill-tag">
              <CssSvg /> CSS
            </div>
            <div className="skill-tag">
              <JsSvg /> JavaScript
            </div>
            
            <div className="skill-tag">
              <TsSvg /> TypeScript
            </div>
            <div className="skill-tag">
              <ReactSvg /> React
            </div>  
            <div className="skill-tag">
              <NodeSvg /> Node.js
            </div>
            <div className="skill-tag">
              <ExpressSvg /> Express
            </div>
            <div className="skill-tag">
              <MongoSvg /> MongoDB
            </div>
            <div className="skill-tag">
              <GitSvg /> Git
            </div>
            <div className="skill-tag">
              <GithubIcon /> GitHub
            </div>
          </div>
        </section>

        {/* Projects Card */}
        <section id="projects" className="section-card">
          <div className="section-header">
            <div className="section-icon-bg">
              <BriefcaseIcon />
            </div>
            <h2 className="section-title">Projects</h2>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-badge-title">
                <span className="project-number">1</span>
                <h3 className="project-title">Authentication System</h3>
              </div>
              <p className="project-description">
                A secure authentication system with user registration, login, and JWT authentication.
              </p>
              <div className="project-links">
                <a href="#" className="project-btn project-btn-demo">
                  Live Demo <ExternalLinkIcon />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-code">
                  GitHub <GithubIcon />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-badge-title">
                <span className="project-number">2</span>
                <h3 className="project-title">E-Commerce Website</h3>
              </div>
              <p className="project-description">
                A full-featured e-commerce website with product listings, cart, and checkout.
              </p>
              <div className="project-links">
                <a href="#" className="project-btn project-btn-demo">
                  Live Demo <ExternalLinkIcon />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-code">
                  GitHub <GithubIcon />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-badge-title">
                <span className="project-number">3</span>
                <h3 className="project-title">Chat Application</h3>
              </div>
              <p className="project-description">
                A real-time chat application with private rooms and instant messaging.
              </p>
              <div className="project-links">
                <a href="#" className="project-btn project-btn-demo">
                  Live Demo <ExternalLinkIcon />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-code">
                  GitHub <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Card */}
        <section id="contact" className="section-card">
          <div className="section-header">
            <div className="section-icon-bg">
              <EmailIcon />
            </div>
            <h2 className="section-title">Contact</h2>
          </div>

          <div className="contact-layout">
            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="contact-form-container">
              {status.text && (
                <div className={`form-status ${status.type}`}>
                  {status.text}
                </div>
              )}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="form-input" 
                  placeholder="Your Name"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="form-input" 
                  placeholder="Your Email"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="form-textarea" 
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ alignSelf: 'flex-start', opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <EmailIcon />
                </div>
                <div className="contact-info-content">
                  <div className="contact-info-label">Email</div>
                  <a href="mailto:abhikumar86064@gmail.com" className="contact-info-value">
                    abhikumar86064@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <LinkedinIcon />
                </div>
                <div className="contact-info-content">
                  <div className="contact-info-label">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/abhi-kumar-5458593b4/" target="_blank" rel="noopener noreferrer" className="contact-info-value">
                    linkedin.com/in/abhi-kumar
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <GithubIcon />
                </div>
                <div className="contact-info-content">
                  <div className="contact-info-label">GitHub</div>
                  <a href="https://github.com/erabhi95432" target="_blank" rel="noopener noreferrer" className="contact-info-value">
                    github.com/erabhi95432
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p className="footer-text">© {new Date().getFullYear()} Abhi Kumar. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="back-to-top"
            aria-label="Back to Top"
          >
            <ArrowUpIcon />
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
