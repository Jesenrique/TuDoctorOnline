import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

//const URL = 'http://localhost:7000/api/medicos/';
const URL = 'https://doctoronline2.herokuapp.com/api/medicos/';

const CompEditarMedico = () => {

    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const [registro_profesional, setRegistro_profesional] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    //funcion para actualizar
    const update = async (u) => {
        u.preventDefault()
        await axios.put(`${URL}${id}`, {
            nombre: nombre, documento: documento, especialidad: especialidad, disponibilidad: disponibilidad, registro_profesional: registro_profesional
        })
        navigate('/medicos')
    }

    useEffect(() => {
        getMedicoById();
        // eslint-disable-next-line
    }, [])

    const getMedicoById = async () => {
        const res = await axios.get(`${URL}${id}`)
        setNombre(res.data.nombre)
        setDocumento(res.data.documento)
        setEspecialidad(res.data.especialidad)
        setDisponibilidad(res.data.disponibilidad)
        setRegistro_profesional(res.data.registro_profesional)
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
                    <label className="form-label"> Nombre del medico </label>
                    <input
                        value={nombre}
                        onChange={(u) => setNombre(u.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Documento del medico </label>
                    <input
                        value={documento}
                        onChange={(u) => setDocumento(u.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Especialidad del medico </label>
                    <input
                        value={especialidad}
                        onChange={(u) => setEspecialidad(u.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> disponibilidad del medico </label>
                    <input
                        value={disponibilidad}
                        onChange={(u) => setDisponibilidad(u.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Registro profesional del medico </label>
                    <input
                        value={registro_profesional}
                        onChange={(u) => setRegistro_profesional(u.target.value)}
                        type='text' className="form-control">
                    </input>
                </div>
                <button type="submit" className="btn btn-info"><i class="fa-solid fa-circle-check"></i></button>
            </form>
        </div>
    )

}


export default CompEditarMedico;