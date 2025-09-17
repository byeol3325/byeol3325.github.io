import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* 전체 레이아웃: 왼쪽 사이드바 + 오른쪽 본문 */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', padding: '2rem' }}>
        
        {/* 왼쪽 사이드 프로필 */}
        <aside style={{ flex: '0 0 250px', borderRight: '1px solid #ddd', paddingRight: '1rem' }}>
          <img 
            src="static/img/moka.jpg" 
            alt="My Profile" 
            style={{ width: '100%', borderRadius: '50%', marginBottom: '1rem' }} 
          />
          <h3>{siteConfig.title}</h3>
          <p>{siteConfig.tagline}</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="https://github.com/byeol3325" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/sungho-moon-byeol3325/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="/docs/intro">Docs</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </aside>

        {/* 오른쪽 본문 */}
        <main style={{ flex: 1 }}>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}