import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const templates = [
    {
        title: 'neutralinojs-minimal',
        description: (
            <>
                The default template for a Neutralinojs app.
            </>
        ),
        githubLink: 'https://github.com/neutralinojs/neutralinojs-minimal'
    },
    {
        title: 'neutralinojs-react',
        description: (
            <>
                A simple React.js template for building Neutralinojs apps
            </>
        ),
        githubLink: 'https://github.com/codezri/neutralinojs-react'
    },
    {
        title: 'awesome-neutralino',
        description: (
            <>
                Collection of awesome resources for Neutralino
            </>
        ),
        githubLink: 'https://github.com/neutralinojs-community/awesome-neutralino'
    },
    {
        title: 'awesome-neutralino',
        description: (
            <>
                Collection of awesome resources for Neutralino
            </>
        ),
        githubLink: 'https://github.com/achou11/awesome-neutralino'
    },
    {
        title: 'neutralinojs.github.io',
        description: (
            <>
                The official website and documentation of Neutralinojs
            </>
        ),
        githubLink: 'https://github.com/neutralinojs/neutralinojs.github.io'
    },
    {
        title: 'neutralinojs-cli',
        description: (
            <>
                neu cli for Neutralinojs
            </>
        ),
        githubLink: 'https://github.com/neutralinojs/neutralinojs-cli'
    },
    {
        title: 'neutralino.js',
        description: (
            <>
                JavaScript API for Neutralinojs
            </>
        ),
        githubLink: 'https://github.com/neutralinojs/neutralino.js'
    },
];

export default function NeutralinoTools() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title="Neutralinojs App Developer Resources"
            description="Check these Neutralinojs development tools, templates, and learning resources for building high-quality cross-platform apps productively">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title} app developer resources</h1>
                </div>
            </header>
            <main>
                <section className={styles.features}>
                    <div className='container'>
                        <h1>Templates</h1>
                        <div className='row'>
                            {templates.map((template, index) => (
                                <div key={index} className={clsx('col col--6', styles.feature)}>
                                    <div className='card padding-md' style={{padding: '2rem'}}>
                                        <h3 className={styles.align}>{template.title}</h3>
                                        <p className={styles.align}>{template.description}</p>
                                        <div>
                                            <Link
                                                className={clsx(
                                                    'button button--outline button--secondary button--lg',
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
                </section>
            </main>
        </Layout>
    );
}
