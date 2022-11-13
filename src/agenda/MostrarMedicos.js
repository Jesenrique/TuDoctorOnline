import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

//const URL = 'http://localhost:7000/api/medicos/'
const URL = 'https://doctoronline2.herokuapp.com/api/medicos/'

//componente mostrar productos
const CompMMedico = () => {
    const [medicos, setMedico] = useState([])
    useEffect(() => {
        getMedicos();
    }, [])

    //mostrar los medicos
    const getMedicos = async () => {
        const resul = await axios.get(URL)
        setMedico(resul.data)
    }

    //eliminar los medicos 
    const deleteMedico = async (id) => {
        //console.alert("presiono el boton eliminar");
        await axios.delete(`${URL}${id}`)
        getMedicos();
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
                                <th>nombre</th>
                                <th>documento</th>
                                <th>especialidad</th>
                                <th>disponibilidad</th>
                                <th>registro_profesional</th>
                                <th>Acciones</th>
                            </tr>

                        </thead>
                        <tbody>
                            {medicos.map((medico, index) => (
                                <tr key={index}>
                                    <td>{medico.nombre}</td>
                                    <td>{medico.documento}</td>
                                    <td>{medico.especialidad}</td>
                                    <td>{medico.disponibilidad}</td>
                                    <td>{medico.registro_profesional}</td>
                                    <td>
                                        <Link to={`/editarM/${medico._id}`} className="btn btn-success"><i className="fa-solid fa-pen"></i></Link>
                                        <button onClick={() => deleteMedico(medico._id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
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

export default CompMMedico;
