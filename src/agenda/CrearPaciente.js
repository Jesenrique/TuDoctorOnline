import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

//const URL = 'http://localhost:7000/api/pacientes/'
const URL = 'https://doctoronline2.herokuapp.com/api/pacientes/'


const CompCrearMedicos = () => {


    const [n_documento, setN_documento] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [celular, setCelular] = useState('');
    const [enfermedad, setEnfermedad] = useState('');
    const [peso, setPeso] = useState('');
    const navigate = useNavigate();

    //funcion guardar 
    const save = async (g) => {
        g.preventDefault()
        await axios.post(URL, { n_documento: n_documento, nombre: nombre, apellido: apellido, edad: edad, correo: correo, direccion: direccion, celular: celular, enfermedad: enfermedad, peso: peso })
        navigate('/pacientes');
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
                        <label for="nombre" className=""> No Documento </label>
                        <input name="nombre"
                            value={n_documento}
                            onChange={(g) => setN_documento(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>

                    <div className="campo">
                        <label for="documento" className=""> Nombre Paciente </label>
                        <input name="documento"
                            value={nombre}
                            onChange={(g) => setNombre(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>

                    <div className="campo">
                        <label className=""> Apellido Paciente </label>
                        <input
                            value={apellido}
                            onChange={(g) => setApellido(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>

                    <div className="campo">
                        <label className=""> Edad Paciente </label>
                        <input
                            value={edad}
                            onChange={(g) => setEdad(g.target.value)}
                            type='number' className="form-control">
                        </input>
                    </div>

                    <div className="campo">
                        <label className=""> Correo Electronico </label>
                        <input
                            value={correo}
                            onChange={(g) => setCorreo(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>
                    <div className="campo">
                        <label className=""> Direccion </label>
                        <input
                            value={direccion}
                            onChange={(g) => setDireccion(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>
                    <div className="campo">
                        <label className=""> Celular Paciente </label>
                        <input
                            value={celular}
                            onChange={(g) => setCelular(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>
                    <div className="campo">
                        <label className=""> Enfermedad </label>
                        <input
                            value={enfermedad}
                            onChange={(g) => setEnfermedad(g.target.value)}
                            type='text' className="form-control">
                        </input>
                    </div>
                    <div className="campo">
                        <label className=""> Peso Paciente </label>
                        <input
                            value={peso}
                            onChange={(g) => setPeso(g.target.value)}
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