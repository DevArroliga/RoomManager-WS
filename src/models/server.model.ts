import express from 'express';

export default class Server {

    private _app: express.Application;
    private _port: number;

    constructor() {
        this._app = express();
        this._port = 3000;
        this._initServer();
    }

    private _initServer = (): void => {
        this._app.listen(this._port, () => {
            console.log(`Servidor siendo ejecutado en el puerto ${ this._port }`)
        });
    }

}