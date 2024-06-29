"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this._initServer = () => {
            this._app.listen(this._port, () => {
                console.log(`Servidor siendo ejecutado en el puerto ${this._port}`);
            });
        };
        this._app = (0, express_1.default)();
        this._port = 3000;
        this._initServer();
    }
}
exports.default = Server;
