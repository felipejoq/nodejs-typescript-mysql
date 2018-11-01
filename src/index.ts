import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';


const server = Server.init(3000);
server.app.use(router);

// Instancia para conectar a MySQL
// Impide que se creen varias instancias de la conexión a la DB.
//MySQL.instance;

server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});