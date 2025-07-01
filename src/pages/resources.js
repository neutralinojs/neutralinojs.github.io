import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const templates = [
    {
        title: 'neutralinojs-minimal',
        description: 'The default template for a Neutralinojs app',
        githubLink: 'https://github.com/neutralinojs/neutralinojs-minimal',
    },
    {
        title: 'neutralinojs-zero',
        description: 'An empty Neutralinojs app, extend as you wish',
        githubLink: 'https://github.com/neutralinojs/neutralinojs-zero',
    },
    {
        title: 'neutralino-svelte-typescript-template',
        description: 'A Svelte and TypeScript template based on Vite bundler',
        githubLink: 'https://github.com/CosmoMyzrailGorynych/neutralino-svelte-typescript-template',
    },
    {
        title: 'neutralinojs-react',
        description: 'A simple React.js template for building Neutralinojs apps',
        githubLink: 'https://github.com/codezri/neutralinojs-react',
    },    {
        title: 'neutralinojs-build-automation-template,
        description: 'A template for bundling binaries into installers using GitHub actions',
        githubLink: 'https://github.com/TolinSimpson/neutralinojs-build-automation-template',
    },
];

const extensions = [
    {
        title: 'neutralino-ext-rust',
        description: 'A low-code Rust extension for Neutralinojs',
        githubLink: 'https://github.com/hschneider/neutralino-ext-rust',
    },
    {
        title: 'neutralino-ext-node',
        description: 'A low-code Node.js extension for Neutralinojs',
        githubLink: 'https://github.com/hschneider/neutralino-ext-node',
    },
    {
        title: 'neutralino-ext-go',
        description: 'A low-code Golang extension for Neutralinojs',
        githubLink: 'https://github.com/hschneider/neutralino-ext-go',
    },
    {
        title: 'neutralino-ext-bun',
        description: 'A low-code Bun extension for Neutralinojs',
        githubLink: 'https://github.com/hschneider/neutralino-ext-bun',
    },
    {
        title: 'neutralino-ext-python',
        description: 'A low-code Python extension for Neutralinojs',
        githubLink: 'https://github.com/hschneider/neutralino-ext-python',
    },
    {
        title: 'neutralinojs-ext-vibrancy',
        description: 'A C++ vibrancy effect extension for Neutralinojs',
        githubLink: 'https://github.com/scanline/neutralinojs-ext-vibrancy',
    },    
];

const libraries = [
    {
        title: 'neutralino-autoupdate',
        description: 'An enhanced auto-updater for Neutralinojs',
        githubLink: 'https://github.com/hschneider/neutralino-autoupdate',
    },
    {
        title: 'neutralino-curl',
        description: 'A cURL wrapper for Neutralinojs',
        githubLink: 'https://github.com/hschneider/neutralino-curl',
    },
    {
        title: 'neutralinojs-menubar',
        description: 'A native-looking menubar for Neutralinojs',
        githubLink: 'https://github.com/scanline/neutralinojs-menubar',
    },  
];

const buildTools = [
    {
        title: 'neutralino-build-scripts',
        description: 'Neutralinojs build automation scripts for macOS, Windows and Linux',
        githubLink: 'https://github.com/hschneider/neutralino-build-scripts',
    },
];

const cliPlugins = [
    {
        title: 'neutralinojs-plugin-explorer',
        description: 'Search for available neu CLI plugins, get detailed information about specific plugins, and list all available plugins',
        githubLink: 'https://github.com/rahulptl165/Plugin-Explorer',
    },
    {
        title: 'neutralinojs-templates',
        description: 'Adds functionality to manage and reuse locally saved neu CLI templates',
        githubLink: 'https://github.com/rahulptl165/neutralinojs-templates',
    }
];

function ResourceSection({title, resources}) {
    return (
        <section className={styles.features}>
            <div className='container'>
                <h1>{title}</h1>
                <div className='row'>
                    {resources.map((props, index) => <Resource key={index} {...props}/>)}
                </div>
            </div>
        </section>
    );
}


function Resource({title, description, githubLink}) {
    return(
    <div className={clsx('col col--6', styles.feature)}>
        <div className='card padding-md' style={{padding: '2rem'}}>
            <h3 className={styles.align}>{title}</h3>
            <p className={styles.align}>{description}</p>
            <div>
                <Link
                    className={clsx(
                        'button button--outline button--secondary button--lg',
                    )}
                    to={githubLink}>
                    View Repository
                </Link>
            </div>
        </div>
    </div>
    );
}

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
                <ResourceSection title="Templates" resources={templates}/>
                <ResourceSection title="Extensions" resources={extensions}/>
                <ResourceSection title="Libraries" resources={libraries}/>
                <ResourceSection title="Build tools" resources={buildTools}/>
                <ResourceSection title="CLI plugins" resources={cliPlugins}/>
            </main>
        </Layout>
    );
}
