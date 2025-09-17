import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Resume from '@site/src/components/Resume';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Portfolio of ${siteConfig.title}`}
      description="SungHo Moon's Portfolio and Resume">
      <main>
        <Resume />
      </main>
    </Layout>
  );
}