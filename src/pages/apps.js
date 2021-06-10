import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {Adsense} from '@ctrl/react-adsense';

const youtubeChannel = "https://www.youtube.com/channel/UCRUPsj26cnJk5sI6WFHAKmA";

const apps = [
  {
    title: 'LiteMan',
    imageUrl: 'img/apps/liteman_prev_linux.gif',
    description: (
      <>
        A simple file viewer app written in Neutralinojs.
      </>
    ),
    tags: ['Angular', 'Material'],
    githubLink: 'https://github.com/codezri/liteman'
  },
  {
    title: 'LitePy',
    imageUrl: 'img/apps/litepy_prev_linux.gif',
    description: (
      <>
         World's simplest Python editor built with Neutralinojs
      </>
    ),
    tags: ['React'],
    githubLink: 'https://github.com/codezri/litepy'
  },
];

function NeutralinoApp({imageUrl, title, description, githubLink, tags}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        {tags.map((tag, idx) => (
          <span key={idx} className="badge badge--warning" style={{marginRight: '6px'}}>{tag}</span>
        ))}
      </p>
      <div className={styles.buttons}>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted,
          )}
          to={githubLink}>
          View project
        </Link>
      </div>
    </div>
  );
}

export default function NeutralinoApps() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Neutralinojs Apps"
      description="Sample cross-platform applications built with the Neutralinojs framework. Learn how to build Neutralino apps by exploring sample apps.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title} Apps</h1>
          <p className="hero__subtitle">Sample apps built with Neutralinojs</p>
        </div>
      </header>
      <main>
        {apps && apps.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {apps.map((props, idx) => (
                  <NeutralinoApp key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className={styles.intro}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <p>
                Display your Neutralinojs app here by making a pull request.
                You can learn more about the above projects from our <a target="_blank" href={youtubeChannel}>YouTube channel</a> .
              </p>
            </div>
            <div className="col col--12">
              <Adsense
                client='ca-pub-4805219819571962'
                slot='1174653824'
                style={{ display: 'block' }}
                layout='in-article'
                format='auto'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Start developing lightweight apps today!</h1>
          <p className="hero__subtitle">
            <code>
              npm install -g @neutralinojs/neu
            </code>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
