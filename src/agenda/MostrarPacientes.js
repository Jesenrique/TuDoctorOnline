import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

//const URL = 'http://localhost:7000/api/pacientes/'
const URL = 'https://doctoronline2.herokuapp.com/api/pacientes/'

//componente mostrar pacientes
const CompMPaciente = () => {
    const [pacientes, setPaciente] = useState([])
    useEffect(() => {
        getPacientes();
    }, [])

    //mostrar los pacientes
    const getPacientes = async () => {
        const resul = await axios.get(URL)
        setPaciente(resul.data)
    }

    //eliminar los pacientes 
    const deletePaciente = async (id) => {
        //console.alert("presiono el boton eliminar");
        await axios.delete(`${URL}${id}`)
        getPacientes();
    }

    return (
        <div className="container">
            <div className="row">
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


                <div className="col">
                    
                    <table className="table">
                        <thead className="">
                            <tr>
                                <th>No Documento</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Correo</th>
                                <th>Direccion</th>
                                <th>Celular</th>
                                <th>Enfermedad</th>
                                <th>Peso</th>
                                <th>Acciones</th>
                            </tr>

                        </thead>
                        <tbody>
                            {pacientes.map((paciente, index) => (
                                <tr key={index}>
                                    <td>{paciente.n_documento}</td>
                                    <td>{paciente.nombre}</td>
                                    <td>{paciente.apellido}</td>
                                    <td>{paciente.edad}</td>
                                    <td>{paciente.correo}</td>
                                    <td>{paciente.direccion}</td>
                                    <td>{paciente.celular}</td>
                                    <td>{paciente.enfermedad}</td>
                                    <td>{paciente.peso}</td>
                                    <td>
                                        <Link to={`/editarP/${paciente._id}`} className="btn btn-success"><i className="fa-solid fa-pen"></i></Link>
                                        <button onClick={() => deletePaciente(paciente._id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}

export default CompMPaciente;
