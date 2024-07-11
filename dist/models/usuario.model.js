"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_db_1 = __importDefault(require("../db/connection.db"));
const connection = new connection_db_1.default();
const sequelize = connection._sequelizeConnection;
// @Table({ noPrimaryKey: true })
class Usuario extends sequelize_1.Model {
}
exports.default = Usuario;
Usuario.init({
    email: { type: sequelize_1.DataTypes.STRING, primaryKey: true, allowNull: false },
    nombre: { type: sequelize_1.DataTypes.STRING },
    password: { type: sequelize_1.DataTypes.STRING },
}, {
    sequelize,
    tableName: 'Usuario', // Especifica el nombre de la tabla manualmente ('empleados')
    freezeTableName: true, // Evitamos la pluralización automática
    timestamps: false,
    createdAt: false,
});
// console.log('Estado', Empleado === sequelize.models.Empleado); // true
