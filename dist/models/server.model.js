"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empleado_endpoint_1 = __importDefault(require("../endpoints/empleado.endpoint"));
class Server {
    constructor() {
        this._initServer = () => {
            this._app.listen(this._port, () => {
                console.log(`Servidor siendo ejecutado en el puerto ${this._port}`);
            });
        };
        this._endPoints = () => {
            this._app.use('/api/empleados', empleado_endpoint_1.default);
        };
        const envPort = process.env.PORT; // 3000
        this._app = (0, express_1.default)();
        this._port = envPort || '3001';
        this._initServer();
        this._app.use(express_1.default.json());
        this._endPoints();
    }
}
exports.default = Server;
