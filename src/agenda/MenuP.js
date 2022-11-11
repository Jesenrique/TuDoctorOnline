import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

//const URL = 'http://localhost:7000/logueo'
//const URLV = 'http://localhost:7000/val'

const URL = 'https://doctoronline2.herokuapp.com/logueo'
const URLV = 'https://doctoronline2.herokuapp.com/val'


const MenuP = () => {


    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');


    const navigate = useNavigate();

    //funcion login

    const validar = async (g) => {
        g.preventDefault()
        await axios.post(URL, { usuario: usuario, pass: pass })
            .then(function (response, error,req) {

                //console.log(response.data);
                //console.log(response.status);
                //console.log(response.statusText);
                                
                
                if (response.status === 200) {
                    navigate('/citas');

                    console.log(response.status);
                }
                
                 axios.get(URLV)

            })
            .catch(function (error) {
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un código de estado
                    // que esta fuera del rango de 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    alert('error de contraseña o usuario')
                    navigate('/');
                } else if (error.request) {
                    // La petición fue hecha pero no se recibió respuesta
                    // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                    // http.ClientRequest en node.js
                    console.log(error.request);
                } else {
                    // Algo paso al preparar la petición que lanzo un Error
                    console.log('Error', error.message);
                }
                console.log(error.config);

                
                
               
            });
           
    }

    return (
        <div>
            <ul>
                <li><Link to="/citas" className="nav-link"> Home </Link>
                    <ul>
                        <li>
                            <Link to="/citas" className="nav-link disabled" > Citas </Link>
                        </li>
                    </ul>
                </li>
                <li><Link to="/citas" className="nav-link disabled"> Citas </Link>
                    <ul>
                        <li>
                            <Link to="/agregar" className="nav-link disabled"> AgregarCitas </Link>
                        </li>
                    </ul>
                </li>

                <li><Link to="/" className="nav-link disabled"> pacientes </Link>
                    <ul>
                        <li>
                            <Link to="/agregarPaciente" className="nav-link disabled"> Agregar Pacientes </Link>
                        </li>
                    </ul>
                </li>
                <li><Link to="/medicos" className="nav-link disabled"> Medicos </Link>
                    <ul>
                        <li>
                            <Link to="/agregarM" className="nav-link disabled"> Agregar Medicos </Link>
                        </li>
                    </ul>
                </li>
                <li ><Link to="/" className="nav-link-About active disabled"> About </Link></li>


            </ul>
            <form onSubmit={validar}>
                <div class="login-wrap">
                    <div class="login-html">
                        <input id="tab-1" type="radio" name="tab" class="sign-in" checked></input><label for="tab-1" class="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" class="sign-up"></input><label for="tab-2" class="tab">Sign Up</label>
                        <div class="login-form">
                            <div class="sign-in-htm">
                                <div class="group">
                                    <label for="user" class="label">Username</label>
                                    <input name="usuario" value={usuario} onChange={(g) => setUsuario(g.target.value)} type="text" class="input"></input>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Password</label>
                                    <input name="pass" value={pass} onChange={(g) => setPass(g.target.value)} type="password" class="input" data-type="password"></input>
                                </div>
                                <div class="group">
                                    <input id="check" type="checkbox" class="check" checked></input>
                                    <label for="check"><span class="icon"></span> Keep me Signed in</label>
                                </div>
                                <div class="group">
                                    <button type="submit" class="button" value="Sign In">validar</button>
                                </div>
                                <div class="hr"></div>
                                <div class="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default MenuP;