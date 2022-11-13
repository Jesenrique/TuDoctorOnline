//import logo from './baner.jpg';
import './App.css';
import { Slideshow, Slide, TextoSlide } from './slider/Slideshow'
import styled from 'styled-components';
import img1 from './img/baner.jpg';
import img2 from './img/baner.webp';
import img3 from './img/img3.jpg';
import img4 from './img/img4.webp';

// importamos los modulos Citas
import CompMCitas from './agenda/Mostrarcita'
import CompCrearCitas from './agenda/Crearcita'
import CompEditarCitas from './agenda/Editarcita'
import ComMenu from './agenda/MenuP'

// importamos los modulos Medicos

import CompMostrarMedicos from './agenda/MostrarMedicos';
import CompEditarMedico from './agenda/EditarMedicos';
import CompCrearMedico from './agenda/CrearMedico';


// importamos los modulos Pacientes

import CompMostrarPacientes from './agenda/MostrarPacientes';
import CompEditarPaciente from './agenda/EditarPacientes';
import CompCrearPaciente from './agenda/CrearPaciente';


// importar las rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='container'>
      <div className="App">
        <header className="App-header">

          <main className="App-logo">

            <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
              <Slide>
                <a href="https://walink.co/fcf9a7">
                  <img src={img1} alt="" />
                </a>
                <TextoSlide >
                  <p>agenda tu cita con un solo click</p>
                </TextoSlide>
              </Slide>
              <Slide>
                <a href="https://walink.co/20e885">
                  <img src={img2} alt="" />
                </a>
                <TextoSlide>
                  <p>Nuestros asesores se comunicaran con usted</p>
                </TextoSlide>
              </Slide>
              <Slide>
                <a href="https://walink.co/20e885">
                  <img src={img3} alt="" />
                </a>
                <TextoSlide>
                  <p>agenda tu cita con un solo click</p>
                </TextoSlide>
              </Slide>
              <Slide>
                <a href="https://walink.co/fcf9a7">
                  <img src={img4} alt="" />
                </a>
                <TextoSlide>
                  <p>Nuestros asesores se comunicaran con usted</p>
                </TextoSlide>
              </Slide>
            </Slideshow>
          </main>

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

            <Route path='/pacientes' element={<CompMostrarPacientes />}> </Route>
            <Route path='/agregarP' element={<CompCrearPaciente />}> </Route>
            <Route path='/editarP/:id' element={<CompEditarPaciente />}> </Route>
          </Routes>

        </BrowserRouter>

      </div>
    </div>
  );
}
// eslint-disable-next-line 
const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
  
`;

export default App;
