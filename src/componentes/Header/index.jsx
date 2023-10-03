import LinkPages from 'componentes/LinkPages';
import logo from './logo.png';
import styles from './Header.module.css'
import Button from '../Button';


export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>

                <LinkPages url={"./"}>
                    <img src={logo} className={styles.headerLogo} alt='HeroFlix em letras amarela' />
                </LinkPages>

                <LinkPages url={"/novotrailer"}>
                    <Button customization={styles.btnNovoTrailer}>Novo trailer</Button>
                </LinkPages>
            </nav>
        </header>
    )
}