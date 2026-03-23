import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/' element={<Alunos/>}/>
          <Route path='/' element={<Biblioteca/>}/> */}

  
        </Routes>
      </main>

        <Footer/>

    </BrowserRouter>
  );
}

export default App;
