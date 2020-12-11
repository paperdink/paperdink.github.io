import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Stay connected',
    imageUrl: 'img/undraw_signal_searching_bhpc.svg',
    description: (
      <>
        FCC/CE certified WiFi & Bluetooth to help you stay connected.
      </>
    ),
  },
  {
    title: 'Low power',
    imageUrl: 'img/undraw_Nature_benefits_re_kk70.svg',
    description: (
      <>
        Designed for low power consumption. Under <b>20uA</b> in deep sleep.
        With LiPo battery and charger.
      </>
    ),
  },
  {
    title: 'Hackable',
    imageUrl: 'img/undraw_proud_coder_7ain.svg',
    description: (
      <>
        Onboard CP2104 USB-UART converter so you can extend or customize.
      </>
    ),
  },
  {
    title: 'Get notified',
    imageUrl: 'img/undraw_Notify_re_65on.svg',
    description: (
      <>
        Piezo buzzer for notifications and alerts.
      </>
    ),
  },
  {
    title: 'Interact',
    imageUrl: 'img/undraw_switches_1js3.svg',
    description: (
      <>
        4x tactile buttons
      </>
    ),
  },
  {
    title: 'Store',
    imageUrl: 'img/undraw_Image__folder_re_hgp7.svg',
    description: (
      <>
        MicroSD card slot for storing custom images, data, and more.
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

const social = [
  {
    text: 'Hackaday',
    url: 'https://hackaday.io/project/168668-paperdink',
    img: 'img/terminal.svg',
  },
  {
    text: 'Github',
    url: 'https://github.com/rgujju/paperdink',
    img: 'img/github.svg',
  },
  {
    text: 'Crowdfunding (Coming soon!)',
    url: '',
    img: 'img/dollar-sign.svg',
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/paperddotink',
    img: 'img/twitter.svg',
  },
  {
    text: 'Instagram',
    url: 'https://www.instagram.com/paperd.ink/',
    img: 'img/instagram.svg',
  },
];

function SocialLink({text, url, img}) {
  const imgUrl = useBaseUrl(img);
  return (
    <div className='col col--4'>
      <a className={styles.darkLink} href={url}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.socialImage} src={imgUrl} alt={text} />
          </div>
        )}
        <h3 className="text--center">
          {text}
        </h3>
      </a>
    </div>
  );
}

function Social() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <h1>Check us out on</h1>
        </div>
        <div className="row">
          {social.map((props, idx) => (
            <SocialLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const logoUrl = useBaseUrl("img/logo_full.svg");
  const tiltImage = useBaseUrl("img/tilted_low_quality.png");
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="E-paper based dashboard with wifi & bluetooth">
      <header>
        <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101291457);</script>
        <script async src="//static.getclicky.com/js"></script>
        <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101291457ns.gif" /></p></noscript>
        <section className={styles.heroMain}>
        <div className="container">
        <div className="row">
        <div className="col col--6">
          <div>
          {logoUrl && (
            <img src={logoUrl} alt="Logo" width="70%" style={{margin: '5px'}}/>
          )}
          <div className={styles.heroText}>
          <a href="https://paperd.ink" style={{color: '#000000', fontWeight: '450'}}>Paperd.Ink</a> is a beautiful e-paper display board to show calendar, weather, to-do lists, notifications, custom images and much more. Its an open source, low power e-paper display device.
          </div>
          <div className={styles.heroText}>
          The simple, elegant display allows you to get rid of all distractions and work peacefully. Since its open source and fully hackable, you can play around and customize for yourself!
          </div>
          <div>
            <Link
              className={clsx(
                'button button--lg',
                styles.heroButton
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--lg',
                styles.heroButton
              )}>
              Fund us! (coming soon)
            </Link>
          </div>
          </div>
        </div>
        <div className="col col--6">
          <div className='text--center'>
           {tiltImage && (
             <img src={tiltImage} alt="Tilted Image"/>
           )}
          </div>
        </div>
        </div>
        </div>
       </section>
      </header>
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
        <Social />
      </main>
    </Layout>
  );
}

export default Home;
