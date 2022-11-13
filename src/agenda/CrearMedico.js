import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

//const URL = 'http://localhost:7000/api/medicos'
const URL = 'https://doctoronline2.herokuapp.com/api/medicos'


const CompCrearMedicos = () => {

    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const [registro_profesional, setRegistro_profesional] = useState('');
    const navigate = useNavigate();

    //funcion guardar 
    const save = async (g) => {
        g.preventDefault()
        await axios.post(URL, { nombre: nombre, documento: documento, especialidad: especialidad, disponibilidad: disponibilidad, registro_profesional: registro_profesional })
        navigate('/medicos');
    }

    return (
        <div>

            <ul>
                <li><Link to="/citas" className="nav-link"> Home </Link>
                    <ul>
                        <li>
                            <Link to="/citas" className="nav-link"> Citas </Link>
                        </li>
                    </ul>
                </li>
                <li><Link to="/citas" className="nav-link"> Citas </Link>
                    <ul>
                        <li>
                            <Link to="/agregar" className="nav-link"> AgregarCitas </Link>
                        </li>
                    </ul>
                </li>
                <li><Link to="/pacientes" className="nav-link"> pacientes </Link>
                    <ul>
                        <li>
                            <Link to="/agregarP" className="nav-link"> Agregar Pacientes </Link>
                        </li>
                    </ul>
                </li>
                <li><Link to="/medicos" className="nav-link"> Medicos </Link>
                    <ul>
                        <li>
                            <Link to="/agregarM" className="nav-link"> Agregar Medicos </Link>
                        </li>
                    </ul>
                </li>
                <li ><Link to="/" className="nav-link-About active"> About </Link></li>
            </ul>
            <form className="row g-4" onSubmit={save}>
                <div className="contenedor-campos">
                    <div className="campo">
                        <label for="nombre" className=""> Nombre del medico </label>
                        <input name="nombre"
                            value={nombre}
                            onChange={(g) => setNombre(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>

                    <div className="campo">
                        <label for="documento" className=""> Documento del medico </label>
                        <input name="documento"
                            value={documento}
                            onChange={(g) => setDocumento(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>

                    <div className="campo">
                        <label className=""> Especialidad del medico </label>
                        <input
                            value={especialidad}
                            onChange={(g) => setEspecialidad(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>

                    <div className="campo">
                        <label className=""> disponibilidad del medico </label>
                        <input
                            value={disponibilidad}
                            onChange={(g) => setDisponibilidad(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>

                    <div className="campo">
                        <label className=""> Registro profesional del medico </label>
                        <input
                            value={registro_profesional}
                            onChange={(g) => setRegistro_profesional(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>
                    <div className="campo">
                    <label className="">  </label>
                    <button type="submit" ><i class="fa-solid fa-circle-check"></i>Guardar</button>
                    </div>
                </div>
                
            </form>


        </div>




    )
}

export default CompCrearMedicos;