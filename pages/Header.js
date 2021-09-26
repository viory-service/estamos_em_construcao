import React from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'


const profissionais = ({ src, width, quality }) => {
  return 'profissionais.png'
}

const Header = () => {
    return (
        <header className={styles.header}>
          <div className={styles.container}>
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
          </div>
    </header>
    )
}

export default Header
