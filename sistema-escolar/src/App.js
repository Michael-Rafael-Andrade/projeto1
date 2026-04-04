import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import CadastrarAlunos from './pages/CadastrarAlunos';
import Alunos from './pages/Alunos.js';
import Biblioteca from './pages/Biblioteca.js';
import CadastrarLivros from './pages/CadastrarLivros.js';
import Dashboard from './pages/Dashboard.js';
import { ThemeProvider } from './contexts/ThemeContext';
// projeto 1

function App() {
  return (
    <ThemeProvider>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cadastrarAlunos' element={<CadastrarAlunos />} />
            <Route path='/Alunos' element={<Alunos />} />
            <Route path='/Biblioteca' element={<Biblioteca />} />
            <Route path='/CadastrarLivros' element={<CadastrarLivros />} />
            <Route path='/Dashboard' element={<Dashboard />} />
          </Routes>
          <Footer />

        </main>


      </HashRouter>
      {/* </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;
