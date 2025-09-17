import React from 'react';
import { introduction, projects, papers, socialLinks } from '@site/src/data/resume';
import styles from './styles.module.css';

function Resume() {
  return (
    <div className={styles.resumeContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.profileSection}>
            <img src="/img/moon.jpg" alt="SungHo Moon" className={styles.profilePhoto} />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>SungHo Moon</h1>
              <p className={styles.title}>Ph.D. Candidate at DGIST</p>
              <p className={styles.research}>Computer Vision & AI Research Engineer</p>
              <div className={styles.contact}>
                <a href="mailto:byul3325@gmail.com">byul3325@gmail.com</a>
                <span className={styles.separator}>•</span>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className={styles.separator}>•</span>
                <a href="https://github.com/byeol3325" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.aboutText}>
            I am a Computer Vision researcher specializing in <strong>3D Reconstruction</strong>, <strong>Multi-Modal AI</strong>, and <strong>Object Detection</strong>.
            Currently pursuing my Ph.D. at DGIST, I have extensive experience collaborating with industry leaders including Hyundai Motor Company,
            ETRI, and the Ministry of National Defense. My research focuses on developing robust AI systems for real-world applications in
            defense, automotive, healthcare, and retail domains.
          </p>
        </div>
      </section>

      {/* News/Highlights Section */}
      <section className={styles.news}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>News</h2>
          <ul className={styles.newsList}>
            <li><strong>Sep 2025:</strong> 🏆 Won 1st Place in ICCV 2025 Amazon Grocery Vision Challenge (TAL & STAL tracks)</li>
            <li><strong>Jun 2024:</strong> Started collaboration with Huvitz on real-time 3D reconstruction</li>
            <li><strong>Jun 2023:</strong> Paper accepted at CVPR Workshop 2023</li>
            <li><strong>May 2022:</strong> Paper accepted at AAAI 2023</li>
          </ul>
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
                  <p className={styles.paperVenue}>{paper.journal}, {paper.date}</p>
                  {paper.description && (
                    <p className={styles.paperDescription}>{paper.description}</p>
                  )}
                  {paper.url && paper.url !== '#' && (
                    <a href={paper.url} target="_blank" rel="noopener noreferrer" className={styles.paperLink}>
                      [Paper]
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Selected Projects</h2>
          <div className={styles.projectList}>
            {projects.slice(0, 5).map((project, index) => (
              <div key={index} className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>
                    {project.blogUrl ? (
                      <a href={project.blogUrl} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className={styles.projectDate}>{project.date}</span>
                </div>
                <p className={styles.projectCompany}>{project.company}</p>
                <p className={styles.projectDescription}>{project.goal}</p>
                {project.achievement && (
                  <p className={styles.projectAchievement}><strong>Achievement:</strong> {project.achievement}</p>
                )}
              </div>
            ))}
          </div>
          {projects.length > 5 && (
            <details className={styles.moreProjects}>
              <summary className={styles.viewMore}>View all {projects.length} projects →</summary>
              <div className={styles.projectList}>
                {projects.slice(5).map((project, index) => (
                  <div key={index + 5} className={styles.projectItem}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>
                        {project.blogUrl ? (
                          <a href={project.blogUrl} target="_blank" rel="noopener noreferrer">
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <span className={styles.projectDate}>{project.date}</span>
                    </div>
                    <p className={styles.projectCompany}>{project.company}</p>
                    <p className={styles.projectDescription}>{project.goal}</p>
                    {project.achievement && (
                      <p className={styles.projectAchievement}><strong>Achievement:</strong> {project.achievement}</p>
                    )}
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </section>

      {/* Industry Collaboration */}
      <section className={styles.collaboration}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Industry Collaboration</h2>
          <div className={styles.companyGrid}>
            {introduction.collaboration.companies.slice(0, 6).map((company, index) => (
              <a href={company.url} key={index} target="_blank" rel="noopener noreferrer" className={styles.companyLogo} title={company.name}>
                <img src={`/${company.logo}`} alt={company.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsContent}>
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
          <p>© 2025 SungHo Moon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Resume;
