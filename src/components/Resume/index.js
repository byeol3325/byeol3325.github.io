import React from 'react';
import { introduction, projects, papers, socialLinks, skills } from '@site/src/data/resume';
import styles from './styles.module.css';

function Resume() {
  return (
    <div className={styles.resumeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>SungHo Moon</h1>
            <h2 className={styles.heroSubtitle}>Computer Vision & AI Research Engineer</h2>
            <p className={styles.heroDescription}>
              Specializing in <strong>3D Reconstruction</strong>, <strong>Multi-Modal AI</strong>, and <strong>Object Detection</strong>
              <br />
              Leading innovative projects across defense, automotive, and healthcare industries
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>9+</span>
                <span className={styles.statLabel}>Major Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>Industry Partners</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.ctaButton}>View Projects</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                LinkedIn
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/img/moka.jpg" alt="SungHo Moon" className={styles.profileImage} />
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className={styles.expertise}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Core Expertise</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🔍</div>
              <h3>3D Computer Vision</h3>
              <p>3D Reconstruction, Bundle Adjustment, Pose Graph Optimization</p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🤖</div>
              <h3>Multi-Modal AI</h3>
              <p>Multi-camera systems, LiDAR integration, Sensor fusion</p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🎯</div>
              <h3>Object Detection</h3>
              <p>2D/3D Object Detection, Real-time optimization, Edge deployment</p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>⚡</div>
              <h3>Performance Optimization</h3>
              <p>Multi-threading, Memory optimization, Algorithm acceleration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Collaboration */}
      <section className={styles.collaboration}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Industry Collaboration</h2>
          <p className={styles.collaborationText}>
            Proven track record in delivering AI solutions for leading organizations
          </p>
          <div className={styles.companyLogos}>
            {introduction.collaboration.companies.map((company, index) => (
              <a href={company.url} key={index} target="_blank" rel="noopener noreferrer" title={company.name}>
                <img src={`/${company.logo}`} alt={company.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectGrid}>
            {projects.slice(0, 6).map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectCompany}>{project.company}</span>
                </div>
                <p className={styles.projectGoal}>{project.goal}</p>
                <div className={styles.projectFooter}>
                  <span className={styles.projectDate}>{project.date}</span>
                  {project.blogUrl ? (
                    <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      Read More →
                    </a>
                  ) : (
                    <span className={styles.comingSoon}>Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical Stack</h2>
          <div className={styles.skillCategories}>
            <div className={styles.skillCategory}>
              <h3>AI/ML Frameworks</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>PyTorch</span>
                <span className={styles.skillTag}>OpenCV</span>
                <span className={styles.skillTag}>Scikit-learn</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3>Programming</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>C++</span>
                <span className={styles.skillTag}>C</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3>Tools & Platforms</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Linux</span>
                <span className={styles.skillTag}>Git</span>
                <span className={styles.skillTag}>MATLAB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Let's Connect</h2>
          <p className={styles.contactText}>
            Interested in collaboration or discussing AI/Computer Vision projects?
          </p>
          <div className={styles.contactButtons}>
            <a href="mailto:byul3325@gmail.com" className={styles.ctaButton}>
              Get In Touch
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
