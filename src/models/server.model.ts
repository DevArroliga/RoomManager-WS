import { application } from "express";
import express, { Request, Response } from 'express';
import empleadoRouter from "../endpoints/empleado.endpoint";

export default class Server {

    private _app: express.Application;
    private _port: string;


    constructor() {
        const envPort = process.env.PORT // 3000
        
        this._app = express();
        this._port = envPort || '3001';
        this._initServer();
        this._app.use(express.json());


        this._endPoints();
    }

    private _initServer = (): void => {
        this._app.listen(this._port, () => {
            console.log(`Servidor siendo ejecutado en el puerto ${ this._port }`)
        });
    }

    private _endPoints = (): void => {
        this._app.use('/api/empleados', empleadoRouter);
    }
}