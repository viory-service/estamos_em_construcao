import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const profissionais = ({ src, width, quality }) => {
  return 'profissionais.png'
}

const happy = ({ src, width, quality }) => {
  return 'happy2.png'
}
export default function Home() {
  return (
    <div>
      <Head>
        <title>Viory</title>
        <meta name="description" content="Viory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <header className={styles.header}>
          <h1>Viory</h1>
          <h2>Aguarde! Estamos em construção.</h2>
          <p>A página que você está procurando estará disponivel em breve</p>
          
          <div className={styles.img}>
            <Image 
            loader={profissionais}
            src="profissionais.png"
            alt="profissionais"
            width={162}
            height={38}
            />
          </div>
       </header>

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

      <footer className={styles.footer}>
        <div className={styles.imgdiv}>
          <Image
              className={styles.img}
              loader={happy}
              src="happy.png"
              alt="profissionais"
              width={536}
              height={290}
            />
        </div>

        <div className={styles.txt}>
          <h2>Vem aí a maior plataforma de contração de serviços profissionais do Brasil! </h2>
          <p>Conectamos clientes aos melhores profissionais, tudo isso com comodidade e segurança na palma da sua mão.</p>
        </div>
      </footer>
    </div>
  )
}
