// testConnection.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('room_manager_schema', 'sa', '220631', {
    host: 'localhost',
    dialect: 'mysql'
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('La conexión fue realizada exitosamente.');
    } catch (error) {
        console.error('No se pudo hacer una conexión a la base de datos:', error);
    } finally {
        await sequelize.close();
    }
};

testConnection();
