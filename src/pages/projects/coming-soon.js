import React from 'react';
import Layout from '@theme/Layout';
import styles from './coming-soon.module.css';

export default function ComingSoon() {
  return (
    <Layout
      title="Coming Soon"
      description="Project details coming soon">
      <div className={styles.container}>
        <div className={styles.galaxyBackground}>
          <div className={styles.stars}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>
        </div>
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.title}>🌟 Coming Soon</h1>
            <p className={styles.subtitle}>Project Details Under Construction</p>
            <p className={styles.description}>
              I'm currently working on preparing detailed documentation for this project.
              Please check back later for comprehensive information about the implementation,
              results, and insights from this work.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.icon}>📊</span>
                <h3>Detailed Results</h3>
                <p>Performance metrics and comparisons</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>🔧</span>
                <h3>Implementation</h3>
                <p>Technical details and methodology</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>💡</span>
                <h3>Key Insights</h3>
                <p>Lessons learned and future work</p>
              </div>
            </div>
            <a href="/" className={styles.backButton}>← Back to Homepage</a>
          </div>
        </main>
      </div>
    </Layout>
  );
}