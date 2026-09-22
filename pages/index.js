import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Blog Exercise 2</title>
        <meta
          name="description"
          content="Personal IT blog of JUAN PAULO VILLANUEVA"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src="images/profile.jpg"
          alt="JUAN PAULO VILLANUEVA"
          className={styles.profile}
        />

        <h1 className={styles.title}>
          JUAN PAULO VILLANUEVA
        </h1>

        <p className={styles.description}>
          My IT Journey and Specialization
        </p>

        <section className={styles.blogPost}>
          <h2>Why I Chose My IT Specialization</h2>

        <p>
        I chose Data Analytics as my IT specialization because I am interested
        in using data to understand problems and make better decisions. Today,
        businesses collect a large amount of data from their customers,
        transactions, and online activities. Because of this, companies need
        people who can organize, analyze, and understand data to find useful
        information.
        </p>

        <p>
        I became interested in Data Analytics because I enjoy working with data
        and finding patterns or trends that can help solve real-world problems.
        I like the idea of turning raw data into useful information that
        businesses can use. The growing use of data in different industries
        made me more interested in learning tools such as Excel, SQL, Python,
        and data visualization.
        </p>

        <p>
        I believe Data Analytics is important because data can help businesses
        understand their customers, improve their services, and make better
        decisions. Through this specialization, I hope to improve my skills in
        analyzing and presenting data. My goal is to use what I learn in IT to
        help organizations make smarter decisions based on data.
        </p>
        </section>

        <section className={styles.sampleNotice}>
          <p>
            (This is a sample website - you’ll be building a site like this in our{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
          </p>
        </section>
      </main>

      <style jsx>{`
        main {
          padding: 4rem 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          min-height: 80px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }

        footer p {
          margin: 0;
          color: #666;
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
          background: #f5f5f5;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

