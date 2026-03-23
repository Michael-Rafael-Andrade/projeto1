import styles from './Home.module.css';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';


function Home(){

    const[darkMode, setDarkMode] = useState(false);

    return(
        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            
            <header className={styles.header}>
                <h1>Home</h1>
                <p>Bem Vindos a Escola React.js</p>

                <button className={styles.themeBtn} onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <FaSun/> : <FaMoon/> }
                </button>
        
            </header>
        </div>
    );  
}

export default Home;