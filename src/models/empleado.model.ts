import { DataTypes, Model, Sequelize } from "sequelize";
import Connection from "../db/connection.db";

const connection = new Connection();
const sequelize = connection._sequelizeConnection;

export default class Empleado extends Model { }

Empleado.init({
    id_empleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
   }, 
   {
    sequelize,
    modelName: 'Empleado',
    tableName: 'Empleados',  // Especifica el nombre de la tabla manualmente ('empleados')
    freezeTableName: true,   // Evitamos la pluralización automática
    timestamps: false,
    createdAt: false
   }
)

// console.log('Estado', Empleado === sequelize.models.Empleado); // true


