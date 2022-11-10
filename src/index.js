const express = require('express'); // crear rutas de conexion
const conectarDB = require('../config/db');
const cors = require('cors');
var body_parser = require('body-parser');
const jwt = require('jsonwebtoken');
const keys = require('../config/clave');


const app = express();
const port =process.env.PORT || 7000;
// enlazar la conexion con la bases de datos
conectarDB();
app.use(cors());

app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));

// token 
app.set('key', keys.key);
app.use(express.urlencoded({ extended: false }));


app.post('/logueo', (req, res,next) => {
    if (req.body.usuario == "admin" && req.body.pass == "12345") {
        const payload = {
            check: true
        };
        console.log(req.body.pass);
        const token = jwt.sign(payload, app.get('key'), {
            expiresIn: '3d'
          
        });
        console.log(token);
               
                res.json({ msg: 'logueado correctamente', token: token })
        next();
    } else {
        res.json.status(500);
        res.json({ msg: 'el ususario o contraseña no son de inciar sesion' })
    }
});


const verificacion = express.Router();

verificacion.use((req, res , next)=>{
    let token = req.headers['acces-token'] || req.headers['authorization']
    console.log(token);

    if(!token){
        res.status(401).send({msg:'no hay token'});
        return
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7,token.length);
        console.log(token);
         
    }
    if(token){
        jwt.verify(token, app.get('key'),(error,decoded)=>{
           if(error){
            return res.json({msg:'el token ingresado no es el correcto'});
           }else{
               req.decoded = decoded;
               
               next();
               
           }
        });
    }
});

app.get('/val',verificacion, (req,res)=>{
    res.json('informacion importante');
    console.log('importente');
})

// rutas para citas
app.use('/api/citas', require('../routes/cita'));

// rutas para pacientes
app.use('/api/pacientes', require('../routes/paciente'));

// rutas para medico
app.use('/api/medicos', require('../routes/medico'));

// se muestra un mensaje en el navegador
app.get('/', (req, res) => {
    res.send("Bienvenido ya esta configurado su servidor en el navegador");
});


app.listen(port, () => console.log('esta conectado el servidor en el puerto', port));


