const mongosee = require('mongoose'); // conexion a bases de datos mongoose
require('dotenv').config(); // variables globales de entorno


const conectarDB = () => {

    //conexion con Moongose
    mongosee
        .connect(process.env.MONGO_URL)
        .then(() => console.log('esta conectado con mongoDB'))
        .catch((err) => console.error(err));

}
module.exports = conectarDB; 