import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function CVAProject() {
  return (
    <Layout
      title="CVA: Context-aware Video-text Alignment"
      description="CVPR 2026 - Context-aware Video-text Alignment for Video Temporal Grounding">
      <div className={styles.projectContainer}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.container}>
            <div className={styles.badgeContainer}>
              <div className={styles.badge}>CVPR 2026</div>
              <div className={styles.badgeSecondary}>Video Temporal Grounding</div>
            </div>
            <h1 className={styles.title}>CVA: Context-aware Video-text Alignment for Video Temporal Grounding</h1>
            <p className={styles.subtitle}>Sungho Moon*, Seunghun Lee*, Jiwan Seo, Sunghoon Im†</p>
            <div className={styles.meta}>
              <span className={styles.company}>DGIST</span>
              <span className={styles.date}>Sep 2025 - Dec 2025</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.container}>
            <section className={styles.section}>
              <h2>Project Overview</h2>
              <p>
                We propose <strong>CVA (Context-aware Video-text Alignment)</strong>, a novel framework for 
                Video Temporal Grounding that achieves temporally sensitive video-text alignment robust to 
                irrelevant background context. Our approach is built on three key components that work 
                synergistically to address the fundamental challenges in temporal grounding.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Key Components</h2>
              <div className={styles.techGrid}>
                <div className={styles.techCard}>
                  <h3>Query-aware Context Diversification (QCD)</h3>
                  <p>A data augmentation strategy that generates semantically safe and sufficiently 
                  informative synthetic training samples by selecting an intermediate similarity band, 
                  preventing both trivial negatives and false-negative contamination.</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Context-invariant Boundary Discrimination (CBD)</h3>
                  <p>A contrastive loss that explicitly targets start and end boundary clips, enhancing 
                  both cross-view consistency and discriminability against temporally adjacent and 
                  semantically hard negatives.</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Context-enhanced Transformer Encoder (CTE)</h3>
                  <p>A hierarchical encoder combining learnable queries and windowed self-attention to 
                  capture multi-scale temporal context, enhancing the model's ability to encode both 
                  local and global temporal dependencies.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Key Achievements</h2>
              <div className={styles.achievementGrid}>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🏆</div>
                  <div className={styles.achievementContent}>
                    <h3>State-of-the-Art on QVHighlights</h3>
                    <p>+4.95 R1@0.7 and +4.1 HD mAP over previous best methods</p>
                  </div>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>📊</div>
                  <div className={styles.achievementContent}>
                    <h3>State-of-the-Art on TACoS</h3>
                    <p>41.07 mIoU, surpassing previous best by +1.76</p>
                  </div>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🎯</div>
                  <div className={styles.achievementContent}>
                    <h3>State-of-the-Art on Charades-STA</h3>
                    <p>62.61 R1@0.5 and 40.78 R1@0.7, outperforming prior works</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Technologies Used</h2>
              <div className={styles.techGrid}>
                <div className={styles.techCard}>
                  <h3>Deep Learning</h3>
                  <p>PyTorch, Transformer, DETR-based Architecture</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Vision-Language</h3>
                  <p>CLIP, SlowFast, Multi-Modal Fusion</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Temporal Grounding</h3>
                  <p>Moment Retrieval, Highlight Detection</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Training</h3>
                  <p>AdamW, Cosine Annealing, Contrastive Learning</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Resources</h2>
              <div className={styles.resources}>
                <span className={styles.resourceLinkDisabled}>
                  📄 Paper (Coming Soon)
                </span>
                <span className={styles.resourceLinkDisabled}>
                  💻 Code (Coming Soon)
                </span>
                <a href="/" className={styles.resourceLink}>
                  ← Back to Homepage
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
