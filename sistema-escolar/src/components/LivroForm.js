
import { useState } from 'react';
import styles from './../pages/CadastrarLivros.module.css'; // Usar o CSS Module;

function LivroForm({ adicionarLivro }) {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo && autor) {
            adicionarLivro(titulo, autor);
            setTitulo('');
            setAutor('');
        }
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Título do livro" 
                value={titulo} 
                onChange={(e) => setTitulo(e.target.value)} 
                className={styles.formInput}
                required 
            />
            <input 
                type="text" 
                placeholder="Autor do livro" 
                value={autor} 
                onChange={(e) => setAutor(e.target.value)} 
                className={styles.formInput}
                required 
            />
            <button type="submit" className={styles.btnSubmit}>Cadastrar</button>
        </form>
    );
}

export default LivroForm;