import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './Footer'
import Header from './Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Viory</title>
        <meta name="description" content="Viory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <section className={styles.info }>
          <div className={`${styles.div} ${styles.esquerdo}`}>
            <h2>Para quem quer presta serviço.</h2>
            <p>Ideal para você que quer encontrar aquele trampo da hora através de nossa rede de clintes. </p>
            <button>Saber mais</button>
          </div>

          <div  className={`${styles.div} ${styles.direito}`}>
            <h2>Para quem quer contratar.</h2>
            <p>Marceneiros, pintores,  serviços domésticos, diaristas e muitos mais! Tudo isso em um só lugar.</p>
            <button>Saber mais</button>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  )
}
