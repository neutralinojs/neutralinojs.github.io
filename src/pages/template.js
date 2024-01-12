import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const templates = [
    {
        title: 'Neutralinojs-React',
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
                </div>
            </header>
            <main>
                <div className='container' style={{ marginTop: '2rem' }}>
                    <div className='container'>
                        <h1>Templates</h1>
                        <ul className='row'>
                            {templates.map((template, index) => (
                                <li key={index} className={clsx(window.innerWidth <= 768 ? 'col card-demo' : 'card-demo col col--5')} style={{ marginTop: '1rem', marginBottom: '2rem', listStyle: 'none'}}>
                                    <div className='card padding-md' style={{padding: '2rem'}}>
                                        <h3 className={styles.align}>{template.title}</h3>
                                        <p className={styles.align}>{template.description}</p>
                                        <div>
                                            <Link
                                                className={clsx(
                                                    'button button--warning button--lg',
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
