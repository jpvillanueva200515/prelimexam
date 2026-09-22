import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';

const name = 'Juan Paulo Villanueva';

export const siteTitle = '10 Things That Require Zero Talent';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="10 Things That Require Zero Talent"
        />
      </Head>

      <header className={styles.header}>
        <Image
          priority
          src="/profile1.jpg"
          className={styles.profileImage}
          height={120}
          width={120}
          alt="Profile picture"
        />

        <h1 className={styles.headerName}>{name}</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}