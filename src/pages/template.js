// export default TemplatesTools;
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const templates = [
  {
    title: 'Neutralinojs-React',
    image: '../../static/img/logo.png',
    description: (
      <>
        A simple React.js template for building Neutralinojs apps
      </>
    ),
    githubLink: 'https://github.com/codezri/neutralinojs-react'
  },
  {
    title: 'Neutralinojs-Minimal',
    description: (
      <>
        The default template for a Neutralinojs app.
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-minimal'
  },
  

];

export default function NeutralinoTools() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Neutralinojs Tools and Templates"
      description="Sample cross-platform applications built with the Neutralinojs framework. Learn how to build Neutralino templates by exploring sample templates.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title} Tools & Templates</h1>
          {/* <p className="hero__subtitle">Neutralinojs Tools</p> */}
        </div>
      </header>
      <main>
        <div className='container' style={{ marginTop: '2rem' }}>
          <div className='container'>
            <ul className='ul'>
              {templates.map((template, index) => (
                <li key={index} className={clsx('list-item', window.innerWidth <= 768 ? 'col--12' : '')} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                  <div className={styles.card}>
                    {/* <img src={useBaseUrl(`/img/templates/${template.image}`)} alt={template.title} /> */}
                    <h3 class={styles.align}>{template.title}</h3>
                    <p  class={styles.align}>{template.description}</p>
                    <div className={styles.buttonContainer}>
                      <Link
                        className={clsx(
                          'button button--outline button--secondary button--lg',
                        )}
                        to={template.githubLink}>
                        View Repository
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
