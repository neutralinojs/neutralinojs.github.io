import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Privacy Policy`}
      description="Privacy policy of the the Neutralinojs website and documentation">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Privacy Policy</h1>
          <p className="hero__subtitle">Privacy policy of the the Neutralinojs website and documentation</p>
        </div>
      </header>
      <div className={styles.intro}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <p>
                  Neutralinojs framework or CLI doesn't collect user information for analytical and statistical purposes. 
                  However, we use Google Analytics in our website and documentation to understand our developer audience. Therefore, 
                  Google Analytics may place cookies inside your browser via the Neutralinojs website. If you wish not to allow those cookies, 
                  please disable cookies for the Neutralinojs website.
                  <br/><br/>
                  We use Google Analytics data to identify frequently visited pages. 
                  We often make tutorials based on those frequently visited page details.
                  <br/><br/>
                  Last updated date: 2021-07-31
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
