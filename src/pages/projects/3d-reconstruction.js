import React from 'react';
import Layout from '@theme/Layout';
import styles from './project.module.css';

export default function ThreeDReconstruction() {
  return (
    <Layout
      title="3D Building Exterior Reconstruction"
      description="Advanced 3D reconstruction module using monocular images with SIFT/SURF keypoint matching and bundle adjustment">
      <div className={styles.projectContainer}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.badge}>🏗️ Computer Vision</div>
            <h1 className={styles.title}>3D Building Exterior Reconstruction</h1>
            <p className={styles.subtitle}>Monocular Image-based 3D Structure Generation</p>
            <div className={styles.meta}>
              <span className={styles.company}>KETI</span>
              <span className={styles.date}>Aug 2020 - Dec 2020</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.container}>
            <section className={styles.section}>
              <h2>🎯 Project Overview</h2>
              <p>
                Developed a comprehensive 3D reconstruction module capable of generating detailed 3D building 
                structures from monocular images. This project involved implementing state-of-the-art computer 
                vision algorithms including keypoint matching, epipolar geometry computation, and bundle adjustment 
                optimization for accurate 3D scene reconstruction.
              </p>
            </section>

            <section className={styles.section}>
              <h2>🔬 Technical Implementation</h2>
              <div className={styles.techGrid}>
                <div className={styles.techCard}>
                  <h3>SIFT/SURF Keypoint Matching</h3>
                  <p>Implemented robust feature detection and matching algorithms for reliable correspondence across multiple views</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Epipolar Geometry</h3>
                  <p>Computed fundamental matrices and essential matrices for geometric relationship estimation between camera views</p>
                </div>
                <div className={styles.techCard}>
                  <h3>PnP & Bundle Adjustment</h3>
                  <p>Applied Perspective-n-Point algorithms and bundle adjustment optimization for accurate camera pose estimation</p>
                </div>
                <div className={styles.techCard}>
                  <h3>3D Pipeline Integration</h3>
                  <p>Designed and integrated complete reconstruction pipeline from feature extraction to 3D model generation</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🚀 Key Achievements</h2>
              <div className={styles.achievements}>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>🎯</div>
                  <div>
                    <h3>Lead Researcher Role</h3>
                    <p>80% contribution as lead researcher, driving technical decisions and implementation</p>
                  </div>
                </div>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>🏗️</div>
                  <div>
                    <h3>Complete 3D Pipeline</h3>
                    <p>Successfully built end-to-end reconstruction system from monocular inputs</p>
                  </div>
                </div>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>⚡</div>
                  <div>
                    <h3>Robust Performance</h3>
                    <p>Achieved reliable 3D structure generation across various building types</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>💡 Technical Highlights</h2>
              <ul className={styles.highlights}>
                <li>Advanced keypoint matching with RANSAC outlier rejection for robust correspondences</li>
                <li>Multi-view geometry optimization using bundle adjustment for global consistency</li>
                <li>Efficient camera calibration and pose estimation pipeline</li>
                <li>Dense point cloud generation and mesh reconstruction algorithms</li>
                <li>Real-time visualization and quality assessment tools</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>🛠️ Technologies Used</h2>
              <div className={styles.techGrid}>
                <div className={styles.techCard}>
                  <h3>Computer Vision</h3>
                  <p>OpenCV, SIFT, SURF, Bundle Adjustment</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Programming</h3>
                  <p>C++, Python, MATLAB</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Mathematics</h3>
                  <p>Linear Algebra, Optimization, Geometry</p>
                </div>
                <div className={styles.techCard}>
                  <h3>Tools</h3>
                  <p>PCL, Eigen, Ceres Solver</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🔗 Resources</h2>
              <div className={styles.resources}>
                <a href="#" className={styles.resourceLink}>
                  📄 Technical Documentation (Coming Soon)
                </a>
                <a href="#" className={styles.resourceLink}>
                  💻 Code Repository (Coming Soon)
                </a>
                <a href="#" className={styles.resourceLink}>
                  🎥 Demo Video (Coming Soon)
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
