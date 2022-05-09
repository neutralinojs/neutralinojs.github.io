import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {Adsense} from '@ctrl/react-adsense';
import logo from '../../static/logo.gif';

const youtubePlaylist = "https://www.youtube.com/playlist?list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj";
const features = [
  {
    title: 'Native API',
    imageUrl: 'img/undraw_in_progress_ql66.svg',
    description: (
      <>
        Neutralinojs Javascript API exposes access to the operating system level functions such as file manipulation,
        executing commands, showing native dialog boxes, etc.
      </>
    ),
  },
  {
    title: 'Portable & Zero Dependency',
    imageUrl: 'img/undraw_takeout_boxes_ap54.svg',
    description: (
      <>
        No extra dependencies are required to run Neutralinojs apps. The great advantage is that you can make
        applications for all platforms on one platform. No compilers are required!
      </>
    ),
  },
  {
    title: 'Cross-Platform Support',
    imageUrl: 'img/undraw_social_friends_nsbv.svg',
    description: (
      <>
        Neutralinojs apps will work on Linux, Windows, macOS, Web, and Chrome. Single portable application
        can be released for all popular operating systems and web browsers.
      </>
    ),
  },
  {
    title: 'Lightweight & Fast',
    imageUrl: 'img/undraw_upgrade_06a0.svg',
    description: (
      <>
        A simple uncompressed Neutralinojs app is only ~2MB, and a compressed app size is ~0.5MB. Indeed,
        it will not consume either physical memory or storage like any other Chromium-based cross-platform application development framework.
      </>
    ),
  },
  {
    title: 'Simple & Flexible',
    imageUrl: 'img/undraw_happy_announcement_re_tsm0.svg',
    description: (
      <>
        Neutralinojs team always tend to offer simple and flexible development interfaces for programmers.
        The framework has simple portable auto-updater and CLI. We don't use OOP-based classes everywhere and
        time-consuming setups to complicate your work.
      </>
    ),
  },
  {
    title: 'Any Backend, Any Frontend',
    imageUrl: 'img/undraw_work_together_re_5yhn.svg',
    description: (
      <>
        You can build Neutralinojs apps with any frontend framework with your favorite features
        like <Link href="https://webpack.js.org/concepts/hot-module-replacement/">HMR</Link>.
        Also, you can use Neutralinojs
        as a part of any source file with the child process IPC or extend Neutralinojs API
        with any backend language with the extensions IPC.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [isInitialized, setIsInitialized] = useState(false);
  const [isEthABlocked, setIsEthABlocked] = useState(false);
  useEffect(() => {
    if(isInitialized) {
      return;
    }
    setIsInitialized(true);
    try {
      setIsEthABlocked(typeof ethicalads === 'undefined');
      ethicalads.load_placements();
    }
    catch (error) {
      setIsEthABlocked(false);
    }
  });
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Neutralinojs is a framework for building lightweight cross-platform desktop apps with JavaScript, HTML, and CSS.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={logo + '?v=' + Math.floor(Math.random() * 10000) } alt="Neutralinojs logo animation" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
              <div
                data-ea-publisher="neutralino"
                data-ea-type="image"
                id="neutralino-front"
                >
              </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg margin-left--sm',
                styles.getStarted,
              )}
              href="https://discord.gg/cybpp4guTJ">
              Join Discord
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.intro}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <h1>Build once with JavaScript</h1>
              <p>Run on Linux, Windows, macOS, Web, and Chrome Browser.</p>
            </div>
            <div className="col col--6">
              <p>
                Neutralinojs is a lightweight and portable desktop application development framework.
                It lets you develop lightweight cross-platform desktop applications using JavaScript,
                HTML and CSS. You can extend Neutralinojs with any programming language (via extensions IPC) and
                use Neutralinojs as a part of any source file (via child processes IPC).
                <br/><br/>
                In Electron and NWjs, you have to install Node.js and hundreds of dependency libraries.
                Embedded Chromium and Node.js make simple apps bloaty &mdash; in most scenarios, framework weights more than your app source. Neutralinojs offers a lightweight and
                portable SDK which is an alternative for Electron and NW.js. Neutralinojs doesn't bundle Chromium and uses the existing
                web browser library in the operating system (Eg: gtk-webkit2 on Linux).
                Neutralinojs implements a <Link to={useBaseUrl('docs/contributing/security')}>secure</Link> WebSocket connection for native operations and embeds a static web server
                to serve the web content. Also, it offers a built-in <Link href="https://github.com/neutralinojs/neutralino.js">JavaScript client library</Link> for developers.
                <br/><br/>
                If you can build a website, you can build cross-platform desktop apps too because Neutralinojs is a framework for
                creating native desktop applications with web technologies like JavaScript, HTML, and CSS. You can indeed use your
                favorite frontend framework (Angular, React, Svelte, Vue, etc.) for building your next Neutralinojs app.

                <br/><br/>

                <ul>
                  <li>
                    <Link to={useBaseUrl('docs/how-to/use-a-frontend-library')}>Learn how to use your favorite frontend library.</Link>
                  </li>
                  <li>
                    <Link to={useBaseUrl('docs/how-to/extensions-overview')}>Learn how to use your favorite backend language.</Link>
                  </li>
                </ul>
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
          <h1 className="hero__title">Learn Neutralinojs in 5 mins</h1>
          <p className="hero__subtitle">Start building lightweight apps</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Docs
            </Link>
            <Link
              style={{marginLeft: '12px'}}
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={youtubePlaylist}>
              Tutorial
            </Link>
          </div>
        </div>
      </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Start building lightweight apps!</h1>
          <p className="hero__subtitle">
            <code>
              npm install -g @neutralinojs/neu
            </code>
          </p>
        </div>
      </div>
    </Layout>
  );
}
