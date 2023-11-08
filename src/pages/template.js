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
    title: 'Neutralinojs CLI',
    image: '../../static/img/logo.png',
    description: (
      <>
        neu cli for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-cli'
  },
  {
    title: 'Neutralinojs-Vue-Template',
    image: '../../static/img/logo.png',
    description: (
      <>
        Vuejs template for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-vuejs-template'
  },
  {
    title: 'Neutralinojs-React-Template',
    image: '../../static/img/logo.png',
    description: (
      <>
        Reactjs template for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-reactjs-template'
  },
  {
    title: 'Neutralinojs-Angular-Template',
    image: '../../static/img/logo.png',
    description: (
      <>
        Angularjs template for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-angularjs-template'
  },
  {
    title: 'Neutralinojs-Svelte',
    image: '../../static/img/logo.png',
    description: (
      <>
        Svelte starter project for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-svelte'
  },
  {
    title: 'Neutralinojs-Kotlin',
    image: '../../static/img/logo.png',
    description: (
      <>
        Kotlin Starter Project for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-kotlin'
  },
  {
    title: 'Neutralinojs-Typescript',
    image: '../../static/img/logo.png',
    description: (
      <>
        Typescript Starter Pack for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-typescript'
  },
  {
    title: 'Neutralinojs-Javascript',
    image: '../../static/img/logo.png',
    description: (
      <>
        Typescript Starter Pack for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-javascript'
  },
  {
    title: 'Neutralinojs-React',
    image: '../../static/img/logo.png',
    description: (
      <>
        React Starter Pack for Neutralinojs
      </>
    ),
    githubLink: 'https://github.com/neutralinojs/neutralinojs-react'
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
        <div className="container" style={{ marginTop: '2rem' }}>
          <div className={clsx('row', styles.centerRow)}>
            {templates.map((template, index) => (
              <div key={index} className={clsx('col', window.innerWidth <= 768 ? 'col--12' : 'col--4')} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <div className={styles.card}>
                  <img src={useBaseUrl(`/img/templates/${template.image}`)} alt={template.title} />
                  <h3>{template.title}</h3>
                  <p>{template.description}</p>
                  <div className={styles.buttonContainer}>
                    <Link
                      className={clsx(
                        'button button--outline button--secondary button--lg',
                        styles.getStarted, styles.w-100
                      )}
                      to={template.githubLink}>
                      View Repository
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
