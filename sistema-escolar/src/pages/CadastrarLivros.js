import { useState, useEffect } from 'react';
import styles from './CadastrarLivros.module.css';
import LivroForm from '../components/LivroForm';
import LivroList from '../components/LivroList';

function CadastrarLivros() {
    const [livros, setLivros] = useState([]);
    const [mensagem, setMensagem] = useState('');

    // --- ALTERAÇÃO: Carregar do LocalStorage ---
    useEffect(() => {
        const dadosLocais = localStorage.getItem('livros');
        if (dadosLocais) {
            setLivros(JSON.parse(dadosLocais));
        }
    }, []);

    // --- ALTERAÇÃO: Adicionar no LocalStorage ---
    async function adicionarLivro(titulo, autor) {
        const novoLivro = {
            id: Date.now(),
            titulo,
            autor
        };

        try {
            const listaNova = [...livros, novoLivro];
            localStorage.setItem('livros', JSON.stringify(listaNova));
            
            setLivros(listaNova);
            setMensagem('Livro cadastrado com sucesso!');
            setTimeout(() => setMensagem(''), 3000);
        } catch (erro) {
            console.log("Erro ao salvar localmente:", erro);
        }
    }

    // --- ALTERAÇÃO: Remover do LocalStorage ---
    async function removerLivro(id) {
        try {
            const listaAtualizada = livros.filter(livro => livro.id !== id);
            localStorage.setItem('livros', JSON.stringify(listaAtualizada));
            
            setLivros(listaAtualizada);
            setMensagem('Livro removido com sucesso!');
            setTimeout(() => setMensagem(''), 3000);
        } catch (erro) {
            console.error("Erro ao remover o livro:", erro);
        }
    }

    return (
        <div className={styles.container}>
            <h1>Cadastrar Novo Livro</h1>
            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
            <LivroForm adicionarLivro={adicionarLivro} />
            <LivroList livros={livros} removerLivro={removerLivro} />
        </div>
    );
}

export default CadastrarLivros;