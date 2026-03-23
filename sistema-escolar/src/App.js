import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

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

    </BrowserRouter>
  );
}

export default App;
