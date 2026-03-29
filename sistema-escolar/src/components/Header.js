import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserGraduate, FaBook, FaSun, FaMoon } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from './Header.module.css'; 

function Header() {
    // Hook - useContext para acessar os dados globais
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
            <h1>Sistema Escolar <IoSchoolOutline /></h1>
            
            <nav className={styles.nav}>
                <Link to='/'>
                    <FaHome /> Home
                </Link>
                <Link to='/alunos'>
                    <FaUserGraduate /> Alunos
                </Link>
                <Link to='/biblioteca'>
                    <FaBook /> Biblioteca
                </Link>

                {/* Botão de tema dentro do nav */}
                <button onClick={toggleTheme} className={styles.themeBtn}>
                    {darkMode ? <FaSun color="#f1c40f" /> : <FaMoon color="#2c3e50" />}
                </button>
            </nav>
        </header>
    );
}

export default Header;