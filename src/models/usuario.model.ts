import { DataTypes, Model, Sequelize } from "sequelize";
import Connection from "../db/connection.db";

const connection = new Connection();
const sequelize = connection._sequelizeConnection;

// @Table({ noPrimaryKey: true })
export default class Usuario extends Model { }

Usuario.init({
    
    email: { type: DataTypes.STRING, primaryKey: true, allowNull: false},
    nombre: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
   }, 
   {
    
    sequelize,
    tableName: 'Usuario',  // Especifica el nombre de la tabla manualmente ('empleados')
    freezeTableName: true,   // Evitamos la pluralización automática
    timestamps: false,
    createdAt: false,


   }
)

// console.log('Estado', Empleado === sequelize.models.Empleado); // true


