import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './project.module.css';

export default function ICCV2025Challenge() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 'video_00004',
      title: 'Take Action Detection',
      description: 'Demonstration of precise temporal and spatial localization of "take" actions in grocery shopping scenarios',
      src: '/video/video_00004_github_visualization.mp4'
    },
    {
      id: 'video_00013',
      title: 'Return Action Analysis',
      description: 'Advanced detection and tracking of "return" behaviors with multi-modal fusion',
      src: '/video/video_00013_github_visualization.mp4'
    },
    {
      id: 'video_00075',
      title: 'Rummage Behavior Recognition',
      description: 'Complex behavior analysis for "rummage" actions using spatio-temporal modeling',
      src: '/video/video_00075_github_visualization.mp4'
    }
  ];

  return (
    <Layout
      title="ICCV 2025 Grocery Vision Challenge - 1st Place Winner"
      description="Award-winning multi-modal AI solution for Temporal and Spatio-Temporal Action Localization achieving 1st place in Amazon's ICCV 2025 Challenge">
      <div className={styles.projectContainer}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.badgeContainer}>
              <div className={styles.badge}>🏆 1st Place Winner</div>
              <div className={styles.badgeSecondary}>Historical Best Performance</div>
            </div>
            <h1 className={styles.title}>Grocery Shopping Cart Action Recognition Challenge</h1>
            <p className={styles.subtitle}>Multi-modal AI for Temporal & Spatio-Temporal Action Localization</p>
            <div className={styles.meta}>
              <span className={styles.company}>Amazon ICCV 2025 Challenge</span>
              <span className={styles.date}>Track 1 Winner</span>
            </div>
            <div className={styles.achievements}>
              <div className={styles.achievementBadge}>
                <span className={styles.achievementLabel}>TAL</span>
                <span className={styles.achievementRank}>2nd Place</span>
              </div>
              <div className={styles.achievementBadge}>
                <span className={styles.achievementLabel}>STAL</span>
                <span className={styles.achievementRank}>1st Place</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.container}>
            <section className={styles.section}>
              <h2>🎯 Project Overview</h2>
              <p>
                Our award-winning solution for the ICCV 2025 Grocery Vision Challenge represents a breakthrough 
                in understanding complex human behaviors in retail environments. We developed a sophisticated 
                multi-modal fusion architecture that integrates cutting-edge deep learning techniques to achieve 
                unprecedented accuracy in detecting and classifying three critical consumer behaviors: 
                <strong> Take</strong>, <strong>Return</strong>, and <strong>Rummage</strong> actions.
              </p>
              <p>
                The solution combines Temporal Action Localization (TAL) and Spatio-Temporal Action Localization (STAL) 
                approaches, leveraging OpenTAD framework with AdaTAD and CausalTAD models, alongside GLEE object detection 
                and SAM2 segmentation for comprehensive scene understanding.
              </p>
            </section>

            <section className={styles.section}>
              <h2>🎥 Demo Videos & Visualizations</h2>
              <p className={styles.videoDescription}>
                Explore our winning solution in action through these comprehensive visualizations showcasing 
                the precision of our temporal and spatio-temporal action localization pipeline.
              </p>
              
              <div className={styles.videoGrid}>
                {videos.map((video) => (
                  <div key={video.id} className={styles.videoCard}>
                    <div className={styles.videoHeader}>
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                    </div>
                    <div className={styles.videoContainer}>
                      <video 
                        controls 
                        preload="metadata"
                        className={styles.video}
                        poster={`/video/${video.id}_poster.jpg`}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2>🏆 Achievement Highlights</h2>
              <div className={styles.achievementGrid}>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🥇</div>
                  <div className={styles.achievementContent}>
                    <h3>Overall 1st Place Winner</h3>
                    <p>ICCV 2025 Grocery Vision Challenge hosted by Amazon</p>
                  </div>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🥈</div>
                  <div className={styles.achievementContent}>
                    <h3>TAL Track - 2nd Place</h3>
                    <p>Historical best performance in Temporal Action Localization</p>
                  </div>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>🥇</div>
                  <div className={styles.achievementContent}>
                    <h3>STAL Track - 1st Place</h3>
                    <p>Historical best in Spatio-Temporal Action Localization</p>
                  </div>
                </div>
                <div className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>⚡</div>
                  <div className={styles.achievementContent}>
                    <h3>State-of-the-Art Performance</h3>
                    <p>Across all evaluation metrics and benchmarks</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🔬 Technical Architecture</h2>
              <div className={styles.architectureOverview}>
                <h3>Multi-Modal Fusion Pipeline</h3>
                <div className={styles.pipelineFlow}>
                  <div className={styles.pipelineStep}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>TAL Models</h4>
                      <p>Multi-configuration ensemble with AdaTAD & CausalTAD</p>
                    </div>
                  </div>
                  <div className={styles.pipelineArrow}>→</div>
                  <div className={styles.pipelineStep}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>STAL Pipeline</h4>
                      <p>GLEE detection + SAM2 segmentation + tracking</p>
                    </div>
                  </div>
                  <div className={styles.pipelineArrow}>→</div>
                  <div className={styles.pipelineStep}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>Fusion Engine</h4>
                      <p>Intelligent multi-modal fusion & refinement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.techGrid}>
                <div className={styles.techCard}>
                  <h3>🕐 Temporal Action Localization (TAL)</h3>
                  <ul>
                    <li><strong>AdaTAD</strong>: Adaptive temporal action detection for precise boundary localization</li>
                    <li><strong>CausalTAD</strong>: Causal temporal modeling for robust action classification</li>
                    <li><strong>Ensemble Strategy</strong>: Multiple model configurations for enhanced performance</li>
                    <li><strong>OpenTAD Framework</strong>: State-of-the-art temporal action detection pipeline</li>
                  </ul>
                </div>
                <div className={styles.techCard}>
                  <h3>📍 Spatio-Temporal Action Localization (STAL)</h3>
                  <ul>
                    <li><strong>GLEE</strong>: Advanced object detection for precise localization</li>
                    <li><strong>SAM2</strong>: Segment Anything Model 2 for fine-grained segmentation</li>
                    <li><strong>Temporal Tracking</strong>: Robust object tracking across video sequences</li>
                    <li><strong>Spatio-Temporal Tubelets</strong>: Rich 4D object representations</li>
                  </ul>
                </div>
                <div className={styles.techCard}>
                  <h3>⚡ Fusion & Refinement Engine</h3>
                  <ul>
                    <li><strong>Temporal Intersection</strong>: Calculate overlap between TAL segments and STAL tubelets</li>
                    <li><strong>Confidence Refinement</strong>: Multi-modal agreement-based score adjustment</li>
                    <li><strong>Action-Object Association</strong>: Link actions to specific objects in scenes</li>
                    <li><strong>Boundary Optimization</strong>: Refine temporal boundaries using spatial information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🎯 Target Actions & Methodology</h2>
              <div className={styles.actionGrid}>
                <div className={styles.actionCard}>
                  <div className={styles.actionIcon}>📦</div>
                  <h3>Take Action</h3>
                  <p>Customer picking up items from shelves - precise detection of grasp initiation and object acquisition</p>
                </div>
                <div className={styles.actionCard}>
                  <div className={styles.actionIcon}>↩️</div>
                  <h3>Return Action</h3>
                  <p>Customer putting items back to shelves - tracking reverse motion and placement behaviors</p>
                </div>
                <div className={styles.actionCard}>
                  <div className={styles.actionIcon}>🔍</div>
                  <h3>Rummage Action</h3>
                  <p>Customer searching through items without taking - complex behavior analysis of exploratory actions</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🚀 Setup & Installation</h2>
              <div className={styles.setupGuide}>
                <h3>Project Structure</h3>
                <div className={styles.codeBlock}>
                  <pre>{`🏆 iccv25Grocery-Vision-Challenge_1st/
├── 🧠 TAL/                          # Temporal Action Localization
│   ├── OpenTAD/                     # TAL framework
├── 📍 STAL/                         # Spatio-Temporal Action Localization
│   ├── GLEE/                        # Object detection module
│   ├── sam2/                        # Segmentation module
│   └── tracking_output/             # STAL tracking results
├── 📊 data/                         # Challenge datasets
├── 🔧 build_Track1.sh              # Automated environment setup
├── ⚡ inference.sh                 # Main inference pipeline
├── ⚙️ config.py                    # Configuration settings
└── 🔗 create_final_results.py      # Fusion & refinement engine`}</pre>
                </div>

                <h3>Quick Start</h3>
                <div className={styles.commandSteps}>
                  <div className={styles.commandStep}>
                    <div className={styles.stepLabel}>1. Setup Environment</div>
                    <div className={styles.command}>
                      <code>chmod +x build_Track1.sh && ./build_Track1.sh</code>
                    </div>
                  </div>
                  <div className={styles.commandStep}>
                    <div className={styles.stepLabel}>2. Run Inference</div>
                    <div className={styles.command}>
                      <code>bash inference.sh</code>
                    </div>
                  </div>
                  <div className={styles.commandStep}>
                    <div className={styles.stepLabel}>3. View Results</div>
                    <div className={styles.command}>
                      <code>ls -la final_results_v*/</code>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>📊 Results & Performance</h2>
              <div className={styles.resultsGrid}>
                <div className={styles.resultCard}>
                  <h3>TAL Results Format</h3>
                  <div className={styles.formatExample}>
                    <code>&lt;start_frame&gt;,&lt;end_frame&gt;,&lt;action_class&gt;,&lt;confidence&gt;</code>
                    <div className={styles.exampleData}>
                      <div>140,186,0,0.8516  # Take action: 85.16% confidence</div>
                      <div>235,320,1,0.7349  # Return action: 73.49% confidence</div>
                      <div>369,438,2,0.6968  # Rummage action: 69.68% confidence</div>
                    </div>
                  </div>
                </div>
                <div className={styles.resultCard}>
                  <h3>STAL Results Format</h3>
                  <div className={styles.formatExample}>
                    <code>Spatio-temporal tubelets with object tracking</code>
                    <div className={styles.exampleData}>
                      <div>• Rich 4D object representations</div>
                      <div>• Normalized coordinates (0.0 - 1.0)</div>
                      <div>• Per-frame detection confidence</div>
                      <div>• Temporal consistency tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🔗 Resources & Links</h2>
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
                <a href="#" className={styles.resourceLink}>
                  📊 Detailed Results & Metrics (Coming Soon)
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
