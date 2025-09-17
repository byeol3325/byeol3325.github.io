import React from 'react';
import Layout from '@theme/Layout';
import styles from './coming-soon.module.css';

export default function PapersComingSoon() {
  return (
    <Layout
      title="Paper Coming Soon"
      description="Paper details coming soon">
      <div className={styles.container}>
        <div className={styles.galaxyBackground}>
          <div className={styles.stars}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>
        </div>
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.title}>📚 Paper Coming Soon</h1>
            <p className={styles.subtitle}>Publication Details Under Preparation</p>
            <p className={styles.description}>
              The paper is currently under review or in preparation.
              Once published, you'll find the full paper, supplementary materials,
              and related resources here.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.icon}>📄</span>
                <h3>Full Paper</h3>
                <p>Complete manuscript and supplementary materials</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>💻</span>
                <h3>Code & Data</h3>
                <p>Implementation and datasets</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>🎥</span>
                <h3>Presentation</h3>
                <p>Slides and video presentation</p>
              </div>
            </div>
            <a href="/#papers" className={styles.backButton}>← Back to Publications</a>
          </div>
        </main>
      </div>
    </Layout>
  );
}