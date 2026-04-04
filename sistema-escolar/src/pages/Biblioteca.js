import { useState, useEffect } from 'react';
import styles from './Biblioteca.module.css';

function Biblioteca() {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // --- ALTERAÇÃO: Busca direta do LocalStorage ---
        const dadosLocais = localStorage.getItem('livros');
        
        if (dadosLocais) {
            setLivros(JSON.parse(dadosLocais));
        }
        
        setLoading(false); // Carregamento instantâneo
    }, []);

    if (loading) {
        return <p className={styles.loading}>Carregando Livros...</p>
    }

    return (
        <div className={styles.container}>
            <h1>Lista de Livros</h1>
            {livros.length === 0 ? (
                <p className={styles.vazio}>Nenhum livro encontrado no acervo.</p>
            ) : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Título</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro => (
                            <tr key={livro.id}>
                                <td>{livro.id}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Biblioteca;