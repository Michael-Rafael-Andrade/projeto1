
import styles from './../pages/CadastrarLivros.module.css';

function LivroList({ livros, removerLivro }) {
    return (
        <ul className={styles.lista}>
            {livros.map((livro) => (
                <li key={livro.id} className={styles.item}>
                    <span><strong>{livro.titulo}</strong> - {livro.autor}</span>
                    <button onClick={() => removerLivro(livro.id)}>Remover</button>
                </li>
            ))}
        </ul>
    );
}

export default LivroList;