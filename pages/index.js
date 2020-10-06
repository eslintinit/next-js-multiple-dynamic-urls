import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Open
          <code className={styles.code}>/@username</code>
          to see user profile
        </p>
        <p className={styles.description}>
          Open
          <code className={styles.code}>/how-to-article</code>
          to read an article
        </p>
      </main>
    </div>
  );
}
