import { useState, useEffect } from 'react';

function Biblioteca() {

    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const dados = [
            { id: 1, titulo: 'Livro 1', autor: 'Maria Silva' },
            { id: 2, titulo: 'Livro 2', autor: 'João Souza' },
            { id: 3, titulo: 'Livro 3', autor: 'Ana Costa' },
            { id: 4, titulo: 'Livro 4', autor: 'José da Silva' },
            { id: 5, titulo: 'Livro 5', autor: 'Fernanda Santos' },
            { id: 6, titulo: 'Livro 6', autor: 'Gabriel Henrique' },
        ]

        setTimeout(() => {
            setLivros(dados);
            setLoading(false);
        }, 2000);

    }, []);

    if (loading) {
        return <p>Carregando Livros...</p>
    }

    return (

        <div>
            {livros.length === 0 ? (<p>Nenhum livro encontrado</p>)
                : (
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Título
                                </th>
                                <th>
                                    Autor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map(livro => (
                                <tr key = {livro.id} >
                                    <td>{livro.id}</td>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                </tr>
                            ))}
                    </tbody>
                    </table>
    )
}
        </div >

    );
}

export default Biblioteca;