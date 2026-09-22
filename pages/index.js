import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h2 className={styles.heading}>
          10 Things That Require Zero Talent
        </h2>

        <ul className={styles.list}>
          <li>Being On Time</li>
          <li>Making An Effort</li>
          <li>Having A Positive Attitude</li>
          <li>Being Respectful</li>
          <li>Being Honest</li>
          <li>Listening Carefully</li>
          <li>Being Responsible</li>
          <li>Helping Others</li>
          <li>Staying Organized</li>
          <li>Being Prepared</li>
        </ul>

        <p className={styles.sampleText}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a
            className={styles.sampleLink}
            href="https://nextjs.org/learn"
          >
            our Next.js tutorial.
          </a>
          )
        </p>
      </section>
    </Layout>
  );
}