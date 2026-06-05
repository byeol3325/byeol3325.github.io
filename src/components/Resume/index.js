import React, { useState, useEffect } from 'react';
import { introduction, projects, papers, socialLinks } from '@site/src/data/resume';
import styles from './styles.module.css';

const Particles = ({ x, y, onComplete }) => {
  const [particles] = useState(() => {
    return Array.from({ length: 15 }).map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      scale: Math.random() * 0.5 + 0.5,
      rotation: Math.random() * 360,
    }));
  });

  React.useEffect(() => {
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={styles.particlesContainer}
      style={{ left: x, top: y }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            '--tx': `${p.x}px`,
            '--ty': `${p.y}px`,
            '--s': p.scale,
            '--r': `${p.rotation}deg`,
          }}
        >
          <img src="/img/star-logo.svg" alt="star dust" />
        </div>
      ))}
    </div>
  );
};

const renderProjectCard = (project, index) => (
  <div
    key={index}
    className={`${styles.projectItem}${project.type === 'research' ? ' ' + styles.researchProjectItem : ''}`}
  >
    <div className={styles.projectHeader}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <span className={styles.projectDate}>{project.date}</span>
    </div>
    <p className={styles.projectCompany}>{project.company}</p>
    <p className={styles.projectDescription}>{project.goal}</p>
    {project.achievement && (
      <p className={styles.projectAchievement}><strong>Achievement:</strong> {project.achievement}</p>
    )}
    <div className={styles.projectLinks}>
      {project.blogUrl ? (
        <a href={project.blogUrl} className={styles.linkButton}>[Details]</a>
      ) : (
        <span className={styles.confidentialButton}>[Details: Confidential]</span>
      )}
      {project.code === 'coming soon' ? (
        <span className={styles.confidentialButton}>[Code: Coming Soon]</span>
      ) : project.code ? (
        <a href={project.code} className={styles.linkButton}>[Code]</a>
      ) : (
        <span className={styles.confidentialButton}>[Code: Confidential]</span>
      )}
      {project.reference_video && (
        <a href={project.reference_video} className={styles.linkButton} target="_blank" rel="noopener noreferrer">[Reference Video]</a>
      )}
      {project.reference_site && (
        <a href={project.reference_site} className={styles.linkButton} target="_blank" rel="noopener noreferrer">[Reference Site]</a>
      )}
    </div>
  </div>
);

function Resume() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/img/moon.jpg', '/img/moka.jpg'];
  const [particleEffects, setParticleEffects] = useState([]);

  const researchProjects = projects.filter(p => p.type === 'research');
  const industryProjects = projects.filter(p => p.type === 'industry');

  const handleStarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const id = Date.now();
    setParticleEffects(prev => [...prev, { id, x, y }]);
  };

  const removeParticleEffect = (id) => {
    setParticleEffects(prev => prev.filter(effect => effect.id !== id));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.resumeContainer}>
      {/* Galaxy Animation Background */}
      <div className={styles.galaxyBackground}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navigationBar}>
        <div className={styles.navContainer}>
          <button className={styles.navButton} onClick={() => scrollToSection('about')} title="About me">
            <span className={styles.navText}>About me</span>
          </button>
          <button className={styles.navButton} onClick={() => scrollToSection('news')} title="News">
            <span className={styles.navText}>News</span>
          </button>
          <button className={styles.navButton} onClick={() => scrollToSection('projects')} title="Major Projects">
            <span className={styles.navText}>Projects</span>
          </button>
          <button className={styles.navButton} onClick={() => scrollToSection('papers')} title="Publications">
            <span className={styles.navText}>Publications</span>
          </button>
          <button className={styles.navButton} onClick={() => scrollToSection('collaboration')} title="Collaboration">
            <span className={styles.navText}>Collaboration</span>
          </button>
          <a className={styles.navButton} href="/study" title="Research">
            <span className={styles.navText}>Research</span>
          </a>
        </div>
      </nav>

      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.starLogo} onClick={handleStarClick}>
            <img src="/img/star-logo.svg" alt="Star Logo" />
          </div>
          {particleEffects.map(effect => (
            <Particles
              key={effect.id}
              x={effect.x}
              y={effect.y}
              onComplete={() => removeParticleEffect(effect.id)}
            />
          ))}
          <div className={styles.profileSection}>
            <div className={styles.profilePhotoContainer}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="SungHo Moon"
                  className={`${styles.profilePhoto} ${index === currentImage ? styles.active : ''}`}
                />
              ))}
            </div>
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>SungHo Moon</h1>
              <p className={styles.title}>
                <span>Ph.D. Candidate, DGIST</span>
                <span className={styles.titleDivider}> · </span>
                <span className={styles.titleRole}>AI Research Engineer</span>
              </p>
              <div className={styles.contact}>
                <a href="mailto:byul3325@gmail.com">byul3325@gmail.com</a>
                <span className={styles.separator}>•</span>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className={styles.separator}>•</span>
                <a href="https://github.com/byeol3325" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className={styles.achievementsBanner}>
                <span className={styles.achievementsLabel}>Recent Achievements</span>
                <div className={styles.achievementBadges}>
                  <span className={styles.achievementBadge}>CVPR 2026</span>
                  <span className={styles.achievementDivider}>·</span>
                  <span className={styles.achievementBadge}>ICCV 2025 1st Place</span>
                  <span className={styles.achievementDivider}>·</span>
                  <span className={styles.achievementBadge}>10+ Industry Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.aboutText}>
            AI Research Engineer with a track record spanning top-tier publications (<strong>CVPR, AAAI</strong>) and real-world deployments across <strong>10+ industry collaborations</strong>. Pursuing my Ph.D. at <strong>DGIST</strong>, I specialize in <strong>Multi-Modal AI</strong>, <strong>Vision-Language Models</strong>, and <strong>3D Computer Vision</strong> — building systems that bridge research and production. I have worked closely with <strong>Hyundai Motor Company, Honda, Elith, ETRI</strong>, and more. Always open to industry collaborations, research discussions, and new opportunities.
          </p>
        </div>
      </section>

      {/* News/Highlights Section */}
      <section id="news" className={styles.news}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>News</h2>
          <ul className={styles.newsList}>
            <li><strong>Mar 2026:</strong> <strong>Paper accepted</strong> at <strong>CVPR 2026</strong>: "CVA: Context-aware Video-text Alignment for Video Temporal Grounding"</li>
            <li><strong>Sep 2025:</strong> <strong>Won 1st Place</strong> in <strong>ICCV 2025</strong> Amazon Grocery Vision Challenge (TAL &amp; STAL tracks)</li>
            <li><strong>Jul 2025:</strong> <strong>Completed projects</strong> with <strong>Huvitz</strong> on real-time 3D reconstruction using LCD, PGO</li>
            <li><strong>Dec 2024:</strong> <strong>Completed projects</strong> with <strong>ETRI</strong> on pill detection and recognition</li>
            <li><strong>Nov 2024:</strong> <strong>Completed projects</strong> with <strong>HD Korea Shipbuilding &amp; Offshore Engineering</strong> on camera calibration</li>
          </ul>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Major Projects</h2>

          <p className={styles.projectSubheading}>Research</p>
          <div className={styles.projectList}>
            {researchProjects.map((project, index) => renderProjectCard(project, index))}
          </div>

          <p className={styles.projectSubheading}>Industry</p>
          <div className={styles.projectList}>
            {industryProjects.slice(0, 3).map((project, index) => renderProjectCard(project, index))}
          </div>
          {industryProjects.length > 3 && (
            <details className={styles.moreProjects}>
              <summary className={styles.viewMore}>View all {industryProjects.length} industry projects →</summary>
              <div className={styles.projectList}>
                {industryProjects.slice(3).map((project, index) => renderProjectCard(project, index + 3))}
              </div>
            </details>
          )}
        </div>
      </section>

      {/* Publications Section */}
      <section id="papers" className={styles.publications}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Publications</h2>
          <div className={styles.paperList}>
            {papers.map((paper, index) => (
              <div key={index} className={styles.paperItem}>
                <div className={styles.paperContent}>
                  <h3 className={styles.paperTitle}>{paper.title}</h3>
                  <p className={styles.paperAuthors}>{paper.authors}</p>
                  <p className={styles.paperVenue}>{paper.journal}</p>
                  {paper.description && (
                    <p className={styles.paperDescription}>{paper.description}</p>
                  )}
                  <div className={styles.paperLinks}>
                    {paper.url && paper.url !== '#' ? (
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>[Paper]</a>
                    ) : (
                      <a href="/papers/coming-soon" className={styles.linkButton}>[Coming Soon]</a>
                    )}
                    {paper.github && paper.github !== 'confidential' && paper.github !== 'coming soon' ? (
                      <a href={paper.github} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>[GitHub]</a>
                    ) : paper.github === 'confidential' ? (
                      <span className={styles.confidentialButton}>[GitHub: Confidential]</span>
                    ) : paper.github === 'coming soon' ? (
                      <span className={styles.confidentialButton}>[GitHub: Coming Soon]</span>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Collaboration */}
      <section id="collaboration" className={styles.collaboration}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Industry Collaboration</h2>
          <div className={styles.companyGrid}>
            {introduction.collaboration.companies.map((company, index) => (
              <a href={company.url} key={index} target="_blank" rel="noopener noreferrer" className={styles.companyLogo} title={company.name}>
                <img src={company.logo} alt={`${company.name} logo`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsContent}>
            <div className={styles.skillGroup}>
              <strong>AI &amp; Computer Vision:</strong> Multi-Modal AI, Vision-Language Models (VLM), 3D Computer Vision, Temporal Action Localization, Pose Graph Optimization
            </div>
            <div className={styles.skillGroup}>
              <strong>Languages:</strong> Python, C++, C, MATLAB
            </div>
            <div className={styles.skillGroup}>
              <strong>Frameworks:</strong> PyTorch, OpenCV, Scikit-learn, TensorFlow
            </div>
            <div className={styles.skillGroup}>
              <strong>Specialties:</strong> 3D Reconstruction, Bundle Adjustment, Object Detection, Multi-Modal AI, Camera Calibration
            </div>
            <div className={styles.skillGroup}>
              <strong>Tools:</strong> Git, Linux, Docker, CUDA
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2026 SungHo Moon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Resume;
