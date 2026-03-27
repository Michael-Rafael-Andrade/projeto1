import { useState, useEffect } from 'react';
import styles from './Alunos.module.css';

function Alunos() {

    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);

    const [listarAluno, setListarAluno] = useState('');

    const alunosFiltrados = alunos.filter((aluno) =>
        aluno.nome.toLowerCase().includes(listarAluno.toLowerCase())
    );

    useEffect(() => {
        // Busca os dados na porta 5000 definida no package.json
        fetch('http://localhost:5000/alunos')
            .then(response => response.json()) // Converte a resposta para JSON
            .then(dados => {
                // Guarda os dados vindos do arquivo db.json no estado
                setAlunos(dados);
                setLoading(false);
            });
    }, []);

    // useEffect(() => {

    //     const dados = [
    //         { id: 1, nome: 'Maria Silva', curso: 'Informática' },
    //         { id: 2, nome: 'João Souza', curso: 'Informática' },
    //         { id: 3, nome: 'Ana Costa', curso: 'Informática' },
    //         { id: 4, nome: 'José da Silva', curso: 'Informática' },
    //         { id: 5, nome: 'Fernanda Santos', curso: 'Informática' },
    //         { id: 6, nome: 'Gabriel Henrique', curso: 'Informática' },

    //     ]

    //     setTimeout(() => {
    //         setAlunos(dados);
    //         setLoading(false);
    //     }, 2000);

    // }, []);

    if (loading) {
        return <p className={styles.loading}>Carregando Alunos...</p>
    }


    return (

        <div className={styles.container}>

            <h1>Lista de Alunos</h1>
            {/* Realizar a busca por nome */}
            <input type="text" placeholder="Buscar aluno por nome..." className={styles.inputBusca} value={listarAluno} onChange={(e) => setListarAluno(e.target.value)} />

            {/* Verificar a lista filtrada */}
            {alunosFiltrados.length === 0 ? (<p className={styles.vazio}>Nenhum aluno encontrado.</p>) : (<table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {alunosFiltrados.map(aluno => (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}

            {/*         
            {alunos.length === 0 ? (<p className={styles.vazio}>Nenhum aluno encontrado.</p>) : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}
        */}

        </div>

    );
}

export default Alunos;