import React from 'react'
import styles from './Footer.module.css'
import logo from './logo.png'
import LinkPages from 'componentes/LinkPages'
import Button from 'componentes/Button'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} className={styles.logo} />
            <LinkPages url={"/novotrailer"}>
                <Button customization={styles.btnNovoTrailer}>Novo trailer</Button>
            </LinkPages>
        </footer>
    )
}

export default Footer