import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

//const URL = 'http://localhost:7000/api/citas/'
const URL ="https://doctoronline2.herokuapp.com/api/citas/"


const CompEditarCitas = () => {
    const [id_paciente, setId_paciente] = useState('')
    const [nombre_paciente, setNombre_paciente] = useState('')
    const [medicamentos, setMedicamentos] = useState('')
    const [celular, setCelular] = useState('')
    const [correo, setCorreo] = useState('')
    const [lugar_cita, setLugar_cita] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [precio, setPrecio] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    // funcion para actualizar
    const update = async (g) => {
        g.preventDefault()
        await axios.put(`${URL}${id}`, {
            id_paciente: id_paciente, nombre_paciente: nombre_paciente, medicamentos: medicamentos, celular: celular, correo: correo,
            lugar_cita: lugar_cita, fecha: fecha, hora: hora, precio: precio
        })
        navigate('/citas')
    }
    useEffect(() => {
        getCitasById();
        // eslint-disable-next-line
    }, [])

    const getCitasById = async () => {
        const res = await axios.get(`${URL}${id}`)
        setId_paciente(res.data.id_paciente)
        setNombre_paciente(res.data.nombre_paciente)
        setMedicamentos(res.data.medicamentos)
        setCelular(res.data.celular)
        setCorreo(res.data.correo)
        setLugar_cita(res.data.lugar_cita)
        setFecha(res.data.fecha)
        setHora(res.data.hora)
        setPrecio(res.data.precio)
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



            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form - label'> id del paciente</label>
                    <input name="" value={id_paciente} onChange={(g) => setId_paciente(g.target.value)}
                        type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form - label'> Nombre del paciente</label>
                    <input name="" value={nombre_paciente} onChange={(g) => setNombre_paciente(g.target.value)}
                        type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form - label'> Medicamentos</label>
                    <input name="" value={medicamentos} onChange={(g) => setMedicamentos(g.target.value)}
                        type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form - label'> celular</label>
                    <input name="" value={celular} onChange={(g) => setCelular(g.target.value)}
                        type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form - label'> correo</label>
                    <input name="" value={correo} onChange={(g) => setCorreo(g.target.value)}
                        type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form - label'> lugar_cita</label>
                    <input name="" value={lugar_cita} onChange={(g) => setLugar_cita(g.target.value)}
                        type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form - label'> fecha</label>
                    <input name="" value={fecha} onChange={(g) => setFecha(g.target.value)}
                        type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form - label'> hora</label>
                    <input name="" value={hora} onChange={(g) => setHora(g.target.value)}
                        type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form - label'> precio</label>
                    <input name="" value={precio} onChange={(g) => setPrecio(g.target.value)}
                        type='number' className='form-control'></input>
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>

            </form>
        </div>

    )





}
export default CompEditarCitas;