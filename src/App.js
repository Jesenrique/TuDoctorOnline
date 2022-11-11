import logo from './baner.jpg';
import './App.css';


// importamos los modulos Citas
import CompMCitas from './agenda/Mostrarcita'
import CompCrearCitas from './agenda/Crearcita'
import CompEditarCitas from './agenda/Editarcita'
import ComMenu from './agenda/MenuP'

// importamos los modulos Medicos

import CompMostrarMedicos from './agenda/MostrarMedicos';
import CompEditarMedico from './agenda/EditarMedicos';
import CompCrearMedico from './agenda/CrearMedico';

// importar las rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>

        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<ComMenu />}> </Route>
            <Route path='/citas' element={<CompMCitas />}> </Route>
            <Route path='/agregar' element={<CompCrearCitas />}> </Route>
            <Route path='/editar/:id' element={<CompEditarCitas />}> </Route>

            <Route path='/medicos' element={<CompMostrarMedicos />}> </Route>
            <Route path='/agregarM' element={<CompCrearMedico />}> </Route>
            <Route path='/editarM/:id' element={<CompEditarMedico />}> </Route>

          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
