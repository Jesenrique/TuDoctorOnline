import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

//const URL = "http://localhost:7000/api/citas/"
const URL ="https://doctoronline2.herokuapp.com/api/citas/"

const CompCrearCitas = () => {
    const [id_paciente, setId_paciente] = useState('');
    const [nombre_paciente, setNombre_paciente] = useState('');
    const [medicamentos, setMedicamentos] = useState('');
    const [celular, setCelular] = useState('');
    const [correo, setCorreo] = useState('');
    const [lugar_cita, setLugar_cita] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();

    // funcion  guardar
    const save = async (g) => {
        g.preventDefault()
        await axios.post(URL, {
            id_paciente: id_paciente, nombre_paciente: nombre_paciente, medicamentos: medicamentos, celular: celular, correo: correo,
            lugar_cita: lugar_cita, fecha: fecha, hora: hora, precio: precio
        })

        navigate('/citas');
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




            <form onSubmit={save}>
                <div className="contenedor-campos">
                    <div className='campo'>
                        <label className=''> id del paciente</label>
                        <input name="" value={id_paciente} onChange={(g) => setId_paciente(g.target.value)}
                            type='text' className='form-control'></input>

                    </div>

                    <div className='campo'>
                        <label className=''> Nombre del paciente</label>
                        <input name="" value={nombre_paciente} onChange={(g) => setNombre_paciente(g.target.value)}
                            type='text' className='form-control'></input>
                    </div>

                    <div className='campo'>
                        <label className=''> Medicamentos</label>
                        <input name="" value={medicamentos} onChange={(g) => setMedicamentos(g.target.value)}
                            type='text' className='form-control'></input>
                    </div>

                    <div className='campo'>
                        <label className=''> celular</label>
                        <input name="" value={celular} onChange={(g) => setCelular(g.target.value)}
                            type='text' className='form-control'></input>
                    </div>

                    <div className='campo'>
                        <label className=''> correo</label>
                        <input name="" value={correo} onChange={(g) => setCorreo(g.target.value)}
                            type='text' className='form-control'></input>
                    </div>

                    <div className='campo'>
                        <label className=''> lugar_cita</label>
                        <input name="" value={lugar_cita} onChange={(g) => setLugar_cita(g.target.value)}
                            type='text' className='form-control'></input>
                    </div>

                    <div className='campo'>
                        <label className=''> fecha</label>
                        <input name="" value={fecha} onChange={(g) => setFecha(g.target.value)}
                            type='text' className='form-control'></input>
                    </div>

                    <div className='campo'>
                        <label className=''> hora</label>
                        <input name="" value={hora} onChange={(g) => setHora(g.target.value)}
                            type='text' className='form-control'></input>
                    </div>

                    <div className='campo'>
                        <label className=''> precio</label>
                        <input name="" value={precio} onChange={(g) => setPrecio(g.target.value)}
                            type='number' className='form-control'></input>
                    </div>
                    <div className="campo">
                        <label className=""> Registro profesional del medico </label>
                        <button type='submit' className=''>Guardar</button>
                    </div>
                    
                </div>
            </form>

        </div>


    )

}
export default CompCrearCitas;