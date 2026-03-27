import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import CadastrarAlunos from './pages/CadastrarAlunos';
import Alunos from './pages/Alunos.js';
import Biblioteca from './pages/Biblioteca.js';
import Dashboard from './pages/Dashboard.js';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastrarAlunos' element={<CadastrarAlunos />} />
          <Route path='/Alunos' element={<Alunos />} />
          <Route path='/Biblioteca' element={<Biblioteca />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
