import express from 'express';
import empleadoRouter from "../routers/empleado.router";
import Connection from '../db/connection.db';

export default class Server {

    private _app: express.Application;
    private _port: string;
    private _connection: Connection

    constructor() {
        const envPort = process.env.PORT // 3000

        this._app = express();
        this._port = envPort || '3001';
        this._connection = new Connection();        

        this._initServer();
        this._middlewares();
        this._endPoints();
    }

    private _initServer = (): void => {
        this._app.listen(this._port, () => {
            console.log(`Servidor siendo ejecutado en el puerto ${this._port}`)
        });
    }

    private _endPoints = (): void => {
        this._app.use('/api/empleados', empleadoRouter); // Declaramos a partir de aqui que todas las rutas que empiecen con /api/empleados serán manejadas por el empleadoRouter.
    }

    private _middlewares = (): void => {
        this._app.use(express.json());
    }
}