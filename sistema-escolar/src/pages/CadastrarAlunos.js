import { useState } from 'react';


function CadastrarAlunos(){

    const [mensagem, setMensagem] = useState('');

    const[alunos, setAlunos] = useState([]);

    function adicionarAluno(nome){
        setAlunos([...alunos, {nome, id: Date.now() }]);
        setMensagem('Aluno cadastrado com sucesso!');
        setTimeout(() => setMensagem(''), 3000);
    }

    function removerAluno(id){
        setAlunos(alunos.filter(aluno => aluno.id !== id))
    }

    return(
        <div>
            <h1>Cadastrar Alunos</h1>

            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}

export default CadastrarAlunos;