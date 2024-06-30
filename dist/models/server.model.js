"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empleado_router_1 = __importDefault(require("../routers/empleado.router"));
const connection_db_1 = __importDefault(require("../db/connection.db"));
class Server {
    constructor() {
        this._initServer = () => {
            this._app.listen(this._port, () => {
                console.log(`Servidor siendo ejecutado en el puerto ${this._port}`);
            });
        };
        this._endPoints = () => {
            this._app.use('/api/empleados', empleado_router_1.default); // Declaramos a partir de aqui que todas las rutas que empiecen con /api/empleados serán manejadas por el empleadoRouter.
        };
        this._middlewares = () => {
            this._app.use(express_1.default.json());
        };
        const envPort = process.env.PORT; // 3000
        this._app = (0, express_1.default)();
        this._port = envPort || '3001';
        this._connection = new connection_db_1.default();
        this._initServer();
        this._middlewares();
        this._endPoints();
    }
}
exports.default = Server;
