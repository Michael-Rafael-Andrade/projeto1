import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header() {

    return (
        <header className={styles.header}>
            <h1>Sistema Escolar</h1>

            <nav>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/'>
                    Alunos
                </Link>
                <Link to='/'>
                    Biblioteca
                </Link>
            </nav>

        </header>

    );
}

export default Header