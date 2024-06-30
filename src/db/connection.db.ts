import { Sequelize } from "sequelize";

export default class Connection{

    private _sequelize: Sequelize;

    constructor(){
        this._sequelize = new Sequelize('room_manager_schema', 'sa', '1234', {
            host: 'localhost',
            dialect: 'mysql'
        })    
        this._testConnection();
    }

    private _testConnection = async () => {
        try {
            await this._sequelize.authenticate();
            console.log('La conexión fue realizada exitosamente.');
        } catch (error) {
            console.error('No se pudo hacer una conexión a la base de datos:', error);
        }
    }

    get _sequelizeConnection(){
        return this._sequelize;
    }
}