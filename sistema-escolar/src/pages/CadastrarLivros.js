import { useState, useEffect } from 'react';
import styles from './CadastrarLivros.module.css';
import LivroForm from '../components/LivroForm';
import LivroList from '../components/LivroList';

function CadastrarLivros() {

    const [livros, setLivros] = useState([]);
    const [mensagem, setMensagem] = useState('');

    // Buscar livros ao carregar a página
    useEffect(() => {
        fetch('http://localhost:5000/livros')
            .then(res => res.json())
            .then(dados => setLivros(dados))
            .catch(err => console.error("Erro ao carregar:", err));
    }, []);


    async function adicionarLivro(titulo, autor) {
        const novoLivro = {
            id: Date.now(), // padrão do modelo aluno
            titulo,
            autor
        };

        try {
            const resposta = await fetch('http://localhost:5000/livros', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoLivro)
            });

            if (resposta.ok) {
                // atualizando a lista na tela e mostrar a mensagem setLivros.
                setLivros([...livros, novoLivro]);
                setMensagem('Livro cadastrado com sucesso!');
                setTimeout(() => setMensagem(''), 3000);
            }
        } catch (erro) {
            console.log("Erro ao salvar:", erro);
        }

    }

    async function removerLivro(id) {
        try {
            // Comando para o servidor deletar o livro específico pelo ID
            const resposta = await fetch(`http://localhost:5000/livros/${id}`, {
                method: 'DELETE',
            });

            if (resposta.ok) {
                // Filtrar a lista atual para remover o livro que tem esse ID
                const listaAtualizada = livros.filter(livro => livro.id !== id);
                setLivros(listaAtualizada);

                setMensagem('Livro removido com sucesso!');
                setTimeout(() => setMensagem(''), 3000);
            }
        } catch (erro) {
            console.error("Erro ao remover o livro:", erro);
        }
    }

    return (
        <div className={styles.container}>
            <h1>Cadastrar Novo Livro</h1>
            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            {/* Passar a função para o formulário */}
            <LivroForm adicionarLivro={adicionarLivro} />
            {/*             
            {/* Passar a lista para o componente de listagem */}
            <LivroList livros={livros} removerLivro={removerLivro} />

        </div>
    );
}





export default CadastrarLivros;