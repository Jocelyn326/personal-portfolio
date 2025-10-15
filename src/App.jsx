import { useState, useEffect } from 'react';
import { Facebook, Github, Mail, Linkedin } from 'lucide-react';

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

        <section id="about">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <p className="section-label">ABOUT ME</p>
                <header>
                  <h2>Who Am I?</h2>
                </header>
                <p className="about-intro">
                  <strong>Hi I'm Jocelyn Bendoy</strong>, a dedicated student pursuing Associate in Computer Technology (ACT2) 
                  at La Verdad Christian College, with aspirations to become a skilled Business Analyst. 
                  My journey in Information Systems has equipped me with a strong foundation in data analysis, 
                  project management, and business process improvement.
                </p>
                <p className="about-intro">
                  At 24 years old from Cabuyao, Laguna, I am passionate about bridging the gap between 
                  technology and business needs. Through my studies and projects, I continuously develop 
                  my analytical abilities and technical skills to prepare for a career where I can help 
                  organizations make data-driven decisions and optimize their processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <header>
              <h2>Projects</h2>
            </header>
            <p>
              Here are some of my recent works showcasing my skills in system development,
              project planning, and front-end design using tools like React and Laravel.
            </p>

            <div className="row">
              <div className="col-4">
                <article className="item">
                  <a href="#" className="image fit">
                    <img src="https://via.placeholder.com/400x250/f7fafc/4a5568?text=Attendance+System" alt="Attendance System" />
                  </a>
                  <header>
                    <h3>Classroom Monitoring and Attendance System</h3>
                  </header>
                </article>
              </div>

              <div className="col-4">
                <article className="item">
                  <a href="#" className="image fit">
                    <img src="https://via.placeholder.com/400x250/f7fafc/4a5568?text=Portfolio+Website" alt="Portfolio" />
                  </a>
                  <header>
                    <h3>Personal Portfolio Website</h3>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <header>
              <h2>Skills</h2>
            </header>
            <p>
              I am continuously improving my technical and analytical abilities. 
              Below are some of the key skills I've gained so far:
            </p>
            <ul>
              <li>Front-End Development (React, HTML, CSS, JavaScript)</li>
              <li>Back-End Development (Laravel, PHP, MySQL)</li>
              <li>Data Analysis & Visualization</li>
              <li>Project Documentation (URS, SRS, UML Diagrams)</li>
              <li>Business Process Analysis</li>
            </ul>
          </div>
        </section>

        <section id="resume">
          <div className="container">
            <header>
              <h2>My Resume</h2>
            </header>
            
            <div className="resume-content">
              <div className="resume-section">
                <h3>Education</h3>

                <div className="resume-item">
                  <div className="resume-date">📅 2025 - Present</div>
                  <h4>La Verdad Christian College</h4>
                  <p className="resume-specialty">Bachelor of Science in Information System </p>
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

        <section id="contact">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>
            <p>Connect with me through my social media accounts below:</p>

            <ul className="icons">
              <li>
                <a href="https://www.facebook.com/share/19dnj9VNSV/" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Jocelyn326" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github size={20} />
                </a>
              </li>
              <li>
                <a href="mailto:jocelynbendoy@gmail.com" title="Email">
                  <Mail size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jocelyn-bendoy-316a2a302/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

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

