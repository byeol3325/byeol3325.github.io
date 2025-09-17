import React from 'react';
import { introduction, projects, papers, socialLinks, skills } from '@site/src/data/resume';
import styles from './styles.module.css';
import Markdown from 'react-markdown';

function Resume() {
  return (
    <div className={styles.resumeContainer}>
      {/* Introduction */}
      <header className={styles.header}>
        <h1>{introduction.title}</h1>
        <p className={styles.subtitle}>{introduction.subtitle}</p>
        <ul className={styles.descriptionList}>
          {introduction.description.map((item, index) => (
            <li key={index}><Markdown>{item}</Markdown></li>
          ))}
        </ul>
      </header>

      {/* Collaboration */}
      <section className={styles.section}>
        <h3>Collaboration Experience</h3>
        <p><Markdown>{introduction.collaboration.text}</Markdown></p>
        <div className={styles.companyLogos}>
          {introduction.collaboration.companies.map((company, index) => (
            <a href={company.url} key={index} target="_blank" rel="noopener noreferrer" title={company.name}>
              {/* 이미지는 static/img/logos/ 폴더에 저장해야 합니다. */}
              <img src={`/img/logos/${company.logo}`} alt={company.name} />
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={styles.section}>
        <h3>Projects</h3>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <h4>{project.title} <span className={styles.projectMeta}>- {project.company} ({project.date})</span></h4>
              <p><strong>Goal:</strong> {project.goal}</p>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Achievement:</strong> {project.achievement}</p>
              <div className={styles.projectLinks}>
                {project.blogUrl ? (
                  <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className={styles.blogLink}>
                    Read Blog Post ✨
                  </a>
                ) : (
                  <span className={styles.comingSoon}>Blog Post Coming Soon ⏳</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Papers */}
      {papers.length > 0 && (
        <section id="papers" className={styles.section}>
          <h3>Papers</h3>
          <div className={styles.paperList}>
            {papers.map((paper, index) => (
              <div key={index} className={styles.paperItem}>
                <h4><a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a></h4>
                <p><em>{paper.journal}</em></p>
                <p>{paper.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      <section className={styles.section}>
        <h3>Languages and Tools</h3>
        <div className={styles.skillIcons}>
          {skills.map((skill, index) => (
            <img key={index} src={skill.icon} alt={skill.name} title={skill.name} />
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className={styles.section}>
        <h3>Connect with me</h3>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" style={{width: '40px', height: '40px'}}/>
        </a>
      </section>

      {/* GitHub Stats */}
      <section className={styles.section}>
          <h3>GitHub Stats</h3>
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=byeol3325&show_icons=true&locale=en&layout=compact" alt="byeol3325 GitHub Stats" />
      </section>
    </div>
  );
}

export default Resume;
