import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/usuario';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Inicializar metododos
        this.middlewares();
        this.routes();
    }

    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes );
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Leer body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto!! ' + this.port);
        });
    }
}

export default Server;