import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


//const url = 'http://localhost:7000/api/citas/'
const url ="https://doctoronline2.herokuapp.com/api/citas/"

const CompMCitas = () => {
    const [citas, SetCitas] = useState([])
    useEffect(() => {
        getCitas();
    }, [])

    // mostrar las citas
    const getCitas = async () => {
        const result = await axios.get(url)
        SetCitas(result.data)
    }

    // eliminar citas
    const deleteCitas = async (id) => {
        await axios.delete(`${url}${id}`)
        getCitas();
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
                    <li><Link to="/" className="nav-link"> pacientes </Link>
                        <ul>
                            <li>
                                <Link to="/agregarPaciente" className="nav-link"> Agregar Pacientes </Link>
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
                                <th>id_paciente</th>
                                <th>nombre_paciente</th>
                                <th>medicamentos</th>
                                <th>celular</th>
                                <th>correo</th>
                                <th>lugar_cita</th>
                                <th>fecha</th>
                                <th>hora</th>
                                <th>precio</th>
                                <th>opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {citas.map((cita, index) => (
                                <tr key={index}>
                                    <td>{cita.id_paciente}</td>
                                    <td>{cita.nombre_paciente}</td>
                                    <td>{cita.medicamentos}</td>
                                    <td>{cita.celular}</td>
                                    <td>{cita.correo}</td>
                                    <td>{cita.lugar_cita}</td>
                                    <td>{cita.fecha}</td>
                                    <td>{cita.hora}</td>
                                    <td>{cita.precio}</td>
                                    <td>
                                        <Link to={`/editar/${cita._id}`} className="btn btn-warning" > <i className="fa-regular fa-newspaper"></i></Link>
                                        <button onClick={() => deleteCitas(cita._id)} className="btn btn-danger"> eliminar</button>
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
export default CompMCitas;