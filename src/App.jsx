import { useState, useEffect } from 'react';
import { Facebook, Github, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('top');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'projects', 'skills', 'resume', 'contact'];
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

  const toggleHeader = () => setIsHeaderVisible(!isHeaderVisible);
  const closeHeader = () => setIsHeaderVisible(false);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    closeHeader();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'top', icon: '🏠', label: 'Home' },
    { id: 'about', icon: '👤', label: 'About Me' },
    { id: 'projects', icon: '💼', label: 'Projects' },
    { id: 'skills', icon: '⚙️', label: 'Skills' },
    { id: 'resume', icon: '📄', label: 'Resume' },
    { id: 'contact', icon: '✉️', label: 'Contact' }
  ];

  return (
    <>
      <div id="overlay" className={isHeaderVisible ? 'visible' : ''} onClick={closeHeader} />

      <div id="headerToggle" className={isHeaderVisible ? 'active' : ''} onClick={toggleHeader}>
        <span className="toggle">☰</span>
      </div>

      <div id="header" className={isHeaderVisible ? 'visible' : ''}>
        <div className="top">
          <div id="logo">
            <img src="Profile.jpg" alt="Jocelyn Bendoy" className="profile-image" />
            <h1 id="title">Jocelyn Bendoy</h1>
            <p>Aspiring Business Analyst</p>
          </div>

          <nav id="nav">
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <a className={activeSection === item.id ? 'active' : ''} onClick={(e) => scrollToSection(item.id, e)}>
                    <span>{item.icon} {item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div id="main">
        {/* Home Section */}
        <section id="top">
          <div className="container">
            <header>
              <h2>Hi! I'm <strong>Jocelyn Bendoy</strong>, an Aspiring <strong>Business Analyst</strong></h2>
              <p>
                As a student of Information Systems at La Verdad Christian College, 
                I'm building my skills in data analysis, project management, and 
                business process improvement. This portfolio highlights my journey, 
                projects, and continuous learning toward becoming a Business Analyst.
              </p>
            </header>
            <footer>
              <button className="button" onClick={(e) => scrollToSection('resume', e)}>
                View My Resume →
              </button>
            </footer>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="container">
            <header>
              <h2 className="section-label">ABOUT ME</h2>
            </header>
            <div className="about-content">
              <div className="about-image">
                <img src="pic.jpg" alt="Jocelyn Bendoy" />
              </div>
              <div className="about-text">
                <p className="about-intro">
                  <strong>Hi, I'm Jocelyn Bendoy</strong>, a BS in Information Systems student at La Verdad Christian College.
                </p>
                <ul className="about-list">
                  <li>I'm passionate about learning how technology and data can be used to improve business processes.</li>
                  <li>I'm currently in my 3rd year of studying Information Systems, and I'm still exploring the path to becoming a Business Analyst.</li>
                  <li>I may just be starting, but I'm eager to learn more about data analysis, system design, and how businesses can use technology to make better decisions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="container">
            <header>
              <h2 className="section-label">MY PROJECTS</h2>
            </header>
            <div className="projects-grid">
              {/* First Project - HCI Website Enhancement */}
              <a 
                href="https://www.figma.com/proto/lUQd9vGi7KnXGZ3LB84l9x/Untitled?node-id=48-2946&t=ubbr0CfgURHvT7oo-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=48%3A2946&show-proto-sidebar=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img src="capcake.png" alt="HCI Website Enhancement Project" />
                  </div>
                  <div className="project-info">
                    <h3>HCI Website Enhancement</h3>
                    <p className="project-description">A comprehensive redesign focused on improving user experience and interface aesthetics for a cupcake business website.</p>
                    <span className="project-cta">View Prototype →</span>
                  </div>
                </div>
              </a>

              {/* Second Project - AKBAY */}
              <a 
                href="https://www.figma.com/proto/85xKBo4X1zavnNBwLg1DSq/AKBAY?node-id=38-15&t=HPTPze9Qgy5sGuig-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=38%3A15&show-proto-sidebar=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img src="akbay.png" alt="AKBAY Project" />
                  </div>
                  <div className="project-info">
                    <h3>AKBAY</h3>
                    <p className="project-description">An innovative mobile application design focused on providing accessible and user-friendly solutions.</p>
                    <span className="project-cta">View Prototype →</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="container">
            <header>
              <h2 className="section-label">MY SKILLS</h2>
            </header>
            <p className="skills-description">
              I am continuously improving my technical and analytical abilities. 
              Below are some of the key skills I've gained so far:
            </p>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">React</span>
                  <span className="skill-percentage">40%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '40%', backgroundColor: '#61DAFB'}}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-percentage">35%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '35%', backgroundColor: '#F7DF1E'}}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">HTML</span>
                  <span className="skill-percentage">45%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '45%', backgroundColor: '#E34F26'}}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">CSS</span>
                  <span className="skill-percentage">42%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '42%', backgroundColor: '#1572B6'}}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">PHP</span>
                  <span className="skill-percentage">30%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '30%', backgroundColor: '#777BB4'}}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">MySQL</span>
                  <span className="skill-percentage">38%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: '38%', backgroundColor: '#4479A1'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume">
          <div className="container">
            <header>
              <h2 className="section-label">MY RESUME</h2>
            </header>
            
            <div className="resume-content">
              <div className="resume-section">
                <h3>Education</h3>

                <div className="resume-item">
                  <div className="resume-date">📅 2025 - Present</div>
                  <h4>La Verdad Christian College</h4>
                  <p className="resume-specialty">Bachelor of Science in Information System</p>
                  <p className="resume-location">Apalit, Pampanga</p>
                </div>

                <div className="resume-item">
                  <div className="resume-date">📅 2023 - 2025</div>
                  <h4>La Verdad Christian College</h4>
                  <p className="resume-specialty">Associate in Computer Technology</p>
                  <p className="resume-location">Apalit, Pampanga</p>
                </div>

                <div className="resume-item">
                  <div className="resume-date">📅 2019 - 2021</div>
                  <h4>Westbridge Institute of Technology</h4>
                  <p className="resume-specialty">Shielded Metal Arc Welding</p>
                  <p className="resume-location">City of Cabuyao, Laguna</p>
                </div>

                <div className="resume-item">
                  <div className="resume-date">📅 2018 - 2019</div>
                  <h4>Southville1 Integrated National Highschool</h4>
                  <p className="resume-location">Brgy. Sala, City of Cabuyao Laguna</p>
                </div>
              </div>

              <div className="resume-section">
                <h3>Work Experience</h3>
                
                <div className="resume-item">
                  <div className="resume-date">📅 2020 - 2022</div>
                  <h4>Production Operator</h4>
                  <p className="resume-company">Furukawa Thermal Corporation</p>
                  <p className="resume-location">Gate 1, Technopark, Biñan, Laguna 4024</p>
                </div>

                <div className="resume-item">
                  <div className="resume-date">📅 2022 - 2024</div>
                  <h4>Production Operator</h4>
                  <p className="resume-company">Nidec Philippine Corporation</p>
                  <p className="resume-location">Gate 3, Technopark, Biñan, Laguna 4024</p>
                </div>
              </div>
            </div>

            <footer style={{ textAlign: 'center', marginTop: '40px' }}>
              <a href="/Resume.png" className="button" download="Resume.png">
                Download Full Resume
              </a>
            </footer>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="contact-container">
            {/* Header */}
            <div className="contact-header">
              <h2>CONTACT</h2>
              <div className="contact-header-line"></div>
            </div>

            {/* Social Media - Top */}
            <div className="contact-social-top">
              <p>You can connect with me at:</p>
              <div className="contact-social-grid">
                <a 
                  href="https://www.linkedin.com/in/jocelyn-bendoy-316a2a302/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <Linkedin size={28} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://www.facebook.com/share/19dnj9VNSV/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <Facebook size={28} />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://github.com/Jocelyn326" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <Github size={28} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Contact Info - Bottom */}
            <div className="contact-info">
              {/* Address */}
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div className="contact-item-content">
                  <h3>Address</h3>
                  <p>Apalit, Pampanga</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div className="contact-item-content">
                  <h3>Phone</h3>
                  <a href="tel:+639121690996">+63 912 169 0996</a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div className="contact-item-content">
                  <h3>Email</h3>
                  <a href="mailto:jocelynbendoy26@gmail.com">
                    jocelynbendoy26@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div id="footer">
        <ul className="copyright">
          <li>© 2025 Jocelyn Bendoy. All rights reserved.</li>
          <li>Designed using React</li>
        </ul>
      </div>
    </>
  );
}

export default App;