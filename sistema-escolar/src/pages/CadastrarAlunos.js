import { useState, useEffect } from 'react';
import styles from './CadastrarAlunos.module.css';
import AlunoForm from './../components/AlunoForm.js';
import AlunoList from '../components/AlunoList.js';

function CadastrarAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const dadosLocais = localStorage.getItem('alunos');
        if (dadosLocais) {
            setAlunos(JSON.parse(dadosLocais));
        }
    }, []);


    async function adicionarAluno(nome) {
        const novoAluno = {
            id: Date.now(), // ID único
            nome,
            curso: "Informática"
        };

        try {
   
            const listaNova = [...alunos, novoAluno];
            localStorage.setItem('alunos', JSON.stringify(listaNova));
            

            setAlunos(listaNova);
            setMensagem('Aluno cadastrado com sucesso!');
            setTimeout(() => setMensagem(''), 3000);
        } catch (erro) {
            console.error("Erro ao salvar aluno localmente:", erro);
        }
    }

    async function removerAluno(id) {
        try {
            // Filtramos a lista removendo o ID selecionado
            const listaAtualizada = alunos.filter(aluno => aluno.id !== id);
            
            localStorage.setItem('alunos', JSON.stringify(listaAtualizada));
            
            // Atualizamos a tela
            setAlunos(listaAtualizada);
            setMensagem('Aluno removido com sucesso! 🗑️');
            setTimeout(() => setMensagem(''), 3000);
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