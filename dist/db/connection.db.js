"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Connection {
    constructor() {
        this._testConnection = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._sequelize.authenticate();
                console.log('La conexión fue realizada exitosamente.');
            }
            catch (error) {
                console.error('No se pudo hacer una conexión a la base de datos:', error);
            }
        });
        this._sequelize = new sequelize_1.Sequelize('room_manager_schema', 'sa', '1234', {
            host: 'localhost',
            dialect: 'mysql'
        });
        this._testConnection();
    }
}
exports.default = Connection;
