import { useState, useEffect } from 'react';
import styles from './CadastrarAlunos.module.css';
import AlunoForm from './../components/AlunoForm.js';
import AlunoList from '../components/AlunoList.js';

function CadastrarAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [mensagem, setMensagem] = useState('');

    // Carregar os alunos do db.json quando a página abre
    useEffect(() => {
        fetch('http://localhost:5000/alunos')
            .then(res => res.json())
            .then(dados => setAlunos(dados))
            .catch(err => console.error("Erro ao carregar:", err));
    }, []);

    // Adicionar, Enviar o novo aluno para o servidor (POST)
    async function adicionarAluno(nome) {
        const novoAluno = {
            id: Date.now(), // Gera um ID único baseado no tempo
            nome,
            curso: "Informática"
        };

        try {
            const resposta = await fetch('http://localhost:5000/alunos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoAluno) // Transforma o objeto em texto JSON
            });

            if (resposta.ok) {
                // Atualiza a lista na tela apenas se gravou no arquivo!
                setAlunos([...alunos, novoAluno]);
                setMensagem('Aluno cadastrado com sucesso!');
                setTimeout(() => setMensagem(''), 3000);
            }
        } catch (erro) {
            console.error("Erro ao salvar aluno:", erro);
        }
    }

    // Remover, Apagar o aluno do servidor (DELETAR)
    async function removerAluno(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/alunos/${id}`, {
                method: 'DELETE'
            });

            if (resposta.ok) {
                // Filtrar a lista para remover da tela o aluno que foi apagado
                const listaAtualizada = alunos.filter(aluno => aluno.id !== id);
                setAlunos(listaAtualizada);
                setMensagem('Aluno removido com sucesso! 🗑️');
                setTimeout(() => setMensagem(''), 3000);
            }
        } catch (erro) {
            console.error("Erro ao remover aluno:", erro);
        }
    }

    return (
        <div className={styles.container}>
            <h1>Cadastrar Alunos</h1>
            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            {/* Passar as funções para os componentes filhos */}
            <AlunoForm adicionarAluno={adicionarAluno} />
            <AlunoList alunos={alunos} removerAluno={removerAluno} />
        </div>
    );
}

export default CadastrarAlunos;