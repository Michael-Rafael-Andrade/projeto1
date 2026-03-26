import styles from '../pages/CadastrarAlunos.module.css';


function AlunoList({ alunos, removeraluno }) {

    if (alunos.length == 0) {
        return <p>Nenhum aluno cadastrado.</p>;
    }

    return (
        <ul className={styles.lista}>
            {alunos.map(aluno => (
                <li key={aluno.id} className={styles.item}>
                    <div>
                        <strong>{aluno.nome}</strong>
                        <button onClick={() => removeraluno(aluno.id)}>❌</button>
                    </div>
                </li>
            ))}
        </ul>
    );

}


export default AlunoList;