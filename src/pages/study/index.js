import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './study-index.module.css';

// Research and study documentation - expandable knowledge base
const studyList = [
  {
    id: 'bundle-adjustment',
    title: 'Bundle Adjustment in Computer Vision: Theory and Applications',
    description: 'An in-depth exploration of Bundle Adjustment optimization techniques in computer vision. This study covers the mathematical foundations, algorithmic implementations, and practical applications in 3D reconstruction and SLAM systems.',
    category: 'Computer Vision',
    date: '2024-07-27',
    tags: ['Computer Vision', '3D Reconstruction', 'Optimization', 'SLAM', 'Multi-View Geometry'],
    status: 'completed',
    url: '/study/bundle-adjustment'
  },
  // Upcoming research topics and studies
  {
    id: 'coming-soon-1',
    title: 'Advanced Deep Learning Architectures for Computer Vision',
    description: 'Comprehensive analysis of state-of-the-art deep learning models and their applications in computer vision tasks.',
    category: 'Deep Learning',
    date: 'Coming Soon',
    tags: ['Deep Learning', 'Neural Networks', 'Computer Vision'],
    status: 'coming-soon',
    url: '#'
  }
];

export default function StudyIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(studyList.map(study => study.category))];

  // Filter studies based on search term and category
  const filteredStudies = useMemo(() => {
    return studyList.filter(study => {
      const matchesSearch = searchTerm === '' || 
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const completedStudies = filteredStudies.filter(study => study.status === 'completed');
  const comingSoonStudies = filteredStudies.filter(study => study.status === 'coming-soon');

  return (
    <Layout
      title="Research Archive"
      description="SungHo Moon's Research Archive - Computer Vision, AI, and Technical Documentation">
      <div className={styles.studyIndexContainer}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Research Archive</h1>
            <p className={styles.pageDescription}>
              A comprehensive collection of research studies, technical documentation, and in-depth analysis of computer vision, artificial intelligence, and related fields. Each study provides theoretical foundations, practical implementations, and real-world applications.
            </p>
            
            {/* Search and Filter Section */}
            <div className={styles.searchSection}>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Search studies by title, content, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                <div className={styles.searchIcon}>🔍</div>
              </div>
              
              <div className={styles.filterContainer}>
                <label className={styles.filterLabel}>Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={styles.categorySelect}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Search Results Info */}
            {(searchTerm || selectedCategory !== 'All') && (
              <div className={styles.searchResults}>
                <p className={styles.resultsText}>
                  Found {filteredStudies.length} result{filteredStudies.length !== 1 ? 's' : ''}
                  {searchTerm && ` for "${searchTerm}"`}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </p>
                {(searchTerm || selectedCategory !== 'All') && (
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className={styles.clearButton}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </header>

          {/* Published Research */}
          {completedStudies.length > 0 && (
            <section className={styles.studySection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>📖</span>
                Published Research ({completedStudies.length})
              </h2>
            <div className={styles.studyGrid}>
              {completedStudies.map((study) => (
                <Link 
                  key={study.id} 
                  to={study.url} 
                  className={styles.studyCard}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={styles.studyCardHeader}>
                    <span className={styles.studyCategory}>{study.category}</span>
                    <span className={styles.studyDate}>{study.date}</span>
                  </div>
                  <h3 className={styles.studyTitle}>{study.title}</h3>
                  <p className={styles.studyDescription}>{study.description}</p>
                  <div className={styles.studyTags}>
                    {study.tags.map((tag, index) => (
                      <span key={index} className={styles.studyTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.studyFooter}>
                    <span className={styles.readMore}>Read Full Study →</span>
                  </div>
                </Link>
              ))}
            </div>
            </section>
          )}

          {/* Upcoming Research */}
          {comingSoonStudies.length > 0 && (
            <section className={styles.studySection}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>🔬</span>
                Upcoming Research ({comingSoonStudies.length})
              </h2>
              <div className={styles.studyGrid}>
                {comingSoonStudies.map((study) => (
                  <div key={study.id} className={`${styles.studyCard} ${styles.comingSoon}`}>
                    <div className={styles.studyCardHeader}>
                      <span className={styles.studyCategory}>{study.category}</span>
                      <span className={styles.studyDate}>{study.date}</span>
                    </div>
                    <h3 className={styles.studyTitle}>{study.title}</h3>
                    <p className={styles.studyDescription}>{study.description}</p>
                    <div className={styles.studyTags}>
                      {study.tags.map((tag, index) => (
                        <span key={index} className={styles.studyTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={styles.studyFooter}>
                      <span className={styles.comingSoonText}>In Development...</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* No Results Message */}
          {filteredStudies.length === 0 && (searchTerm || selectedCategory !== 'All') && (
            <section className={styles.noResults}>
              <div className={styles.noResultsContent}>
                <div className={styles.noResultsIcon}>🔍</div>
                <h3 className={styles.noResultsTitle}>No studies found</h3>
                <p className={styles.noResultsText}>
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            </section>
          )}

          {/* Research Metrics */}
          {!searchTerm && selectedCategory === 'All' && (
            <section className={styles.statsSection}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>{studyList.filter(s => s.status === 'completed').length}</div>
                  <div className={styles.statLabel}>Published Studies</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>{studyList.filter(s => s.status === 'coming-soon').length}</div>
                  <div className={styles.statLabel}>In Development</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>
                    {[...new Set(studyList.flatMap(study => study.tags))].length}
                  </div>
                  <div className={styles.statLabel}>Research Areas</div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
