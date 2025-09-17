import React from 'react';
import Layout from '@theme/Layout';
import styles from './project.module.css';

export default function ICCV2025Challenge() {
  return (
    <Layout
      title="ICCV 2025 Amazon Grocery Vision Challenge - 1st Place Winner"
      description="Multi-modal AI model for Temporal Action Localization achieving 1st place in Amazon's ICCV 2025 Challenge">
      <div className={styles.projectContainer}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.badge}>🏆 1st Place Winner</div>
            <h1 className={styles.title}>ICCV 2025 Amazon Grocery Vision Challenge</h1>
            <p className={styles.subtitle}>Multi-modal AI for Temporal Action Localization</p>
            <div className={styles.meta}>
              <span className={styles.company}>Amazon (ICCV 2025 Challenge)</span>
              <span className={styles.date}>Jul 2025 - Aug 2025</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.container}>
            <section className={styles.section}>
              <h2>🎯 Project Overview</h2>
              <p>
                Developed a cutting-edge multi-modal AI model for Temporal Action Localization (TAL) and 
                Spatio-Temporal Action Localization (STAL) in grocery shopping scenarios. This project was 
                part of Amazon's prestigious ICCV 2025 Challenge, focusing on understanding complex human 
                behaviors in retail environments.
              </p>
            </section>

            <section className={styles.section}>
              <h2>🚀 Key Achievements</h2>
              <div className={styles.achievements}>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>🥇</div>
                  <div>
                    <h3>1st Place in TAL Track</h3>
                    <p>Achieved top performance in Temporal Action Localization</p>
                  </div>
                </div>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>🥇</div>
                  <div>
                    <h3>1st Place in STAL Track</h3>
                    <p>Leading performance in Spatio-Temporal Action Localization</p>
                  </div>
                </div>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>⚡</div>
                  <div>
                    <h3>1 Month Development</h3>
                    <p>Rapid prototyping and optimization within tight deadline</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🔬 Technical Approach</h2>
              <div className={styles.techGrid}>
                <div className={styles.techCard}>
                  <h3>AdaTAD Model</h3>
                  <p>Leveraged AdaTAD (Adaptive Temporal Action Detection) for robust temporal boundary detection with adaptive thresholding mechanisms</p>
                </div>
                <div className={styles.techCard}>
                  <h3>SAM2 Integration</h3>
                  <p>Integrated Segment Anything Model 2 (SAM2) for precise spatial segmentation and object-level action localization</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Multi-Modal Fusion</h3>
                  <p>Combined video, audio, and contextual information through advanced fusion architectures for comprehensive scene understanding</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Spatio-Temporal Optimization</h3>
                  <p>Optimized joint spatio-temporal modeling by combining AdaTAD's temporal precision with SAM2's spatial accuracy</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>💡 Innovation Highlights</h2>
              <ul className={styles.highlights}>
                <li>Successfully combined AdaTAD and SAM2 models for superior TAL & STAL performance</li>
                <li>Achieved state-of-the-art temporal boundary detection with AdaTAD's adaptive mechanisms</li>
                <li>Enhanced spatial localization accuracy through SAM2's advanced segmentation capabilities</li>
                <li>Novel multi-modal fusion architecture specifically optimized for grocery shopping scenarios</li>
                <li>Efficient joint optimization of temporal and spatial components for real-time performance</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>🔗 Resources</h2>
              <div className={styles.resources}>
                <a href="https://grocery-vision.github.io/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  🌐 Official Challenge Website
                </a>
                <a href="#" className={styles.resourceLink}>
                  📄 Technical Paper (Coming Soon)
                </a>
                <a href="#" className={styles.resourceLink}>
                  💻 Code Repository (Coming Soon)
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
