import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'




const happy = ({ src, width, quality }) => {
  return 'happy2.png'
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
      </div>
    </footer>
  )
}

export default Footer
