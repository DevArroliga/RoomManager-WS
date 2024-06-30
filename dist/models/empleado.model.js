"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_db_1 = __importDefault(require("../db/connection.db"));
const connection = new connection_db_1.default();
const sequelize = connection._sequelizeConnection;
class Empleado extends sequelize_1.Model {
}
exports.default = Empleado;
Empleado.init({
    id_empleado: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    departamento: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'Empleado',
    tableName: 'Empleados', // Especifica el nombre de la tabla manualmente ('empleados')
    freezeTableName: true, // Evitamos la pluralización automática
    timestamps: false,
    createdAt: false
});
// console.log('Estado', Empleado === sequelize.models.Empleado); // true
