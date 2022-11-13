import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

//const URL = 'http://localhost:7000/api/pacientes/'
const URL = 'https://doctoronline2.herokuapp.com/api/pacientes/'

const CompEditarPaciente = () => {

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
    const { id } = useParams();

    //funcion para actualizar
    const update = async (p) => {
        p.preventDefault()
        await axios.put(`${URL}${id}`, {
            n_documento: n_documento, nombre: nombre, apellido: apellido, edad: edad, correo: correo, direccion: direccion, celular: celular, enfermedad: enfermedad, peso: peso
        })
        navigate('/pacientes')
    }

    useEffect(() => {
        getPacienteById();
        // eslint-disable-next-line
    }, [])

    const getPacienteById = async () => {
        const res = await axios.get(`${URL}${id}`)
        setN_documento(res.data.n_documento)
        setNombre(res.data.nombre)
        setApellido(res.data.apellido)
        setEdad(res.data.edad)
        setCorreo(res.data.correo)
        setDireccion(res.data.direccion)
        setCelular(res.data.celular)
        setEnfermedad(res.data.enfermedad)
        setPeso(res.data.peso)
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

            <form onSubmit={update}>

                <div className="mb-3">
                    <label className="form-label"> No Documento </label>
                    <input
                        value={n_documento}
                        onChange={(p) => setN_documento(p.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Nombre Paciente </label>
                    <input
                        value={nombre}
                        onChange={(p) => setNombre(p.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Apellido Paciente </label>
                    <input
                        value={apellido}
                        onChange={(p) => setApellido(p.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Edad Paciente </label>
                    <input
                        value={edad}
                        onChange={(p) => setEdad(p.target.value)}
                        type='number' className="form-control">
                    </input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Correo Electronico </label>
                    <input
                        value={correo}
                        onChange={(p) => setCorreo(p.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Direccion </label>
                    <input
                        value={direccion}
                        onChange={(p) => setDireccion(p.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label"> No Celular </label>
                    <input
                        value={celular}
                        onChange={(p) => setCelular(p.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Enfermedad </label>
                    <input
                        value={enfermedad}
                        onChange={(p) => setEnfermedad(p.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Peso Paciente </label>
                    <input
                        value={peso}
                        onChange={(p) => setPeso(p.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>
                <button type="submit" className="btn btn-info"><i class="fa-solid fa-circle-check"></i></button>
            </form>
        </div>
    )

}


export default CompEditarPaciente;

















































































































