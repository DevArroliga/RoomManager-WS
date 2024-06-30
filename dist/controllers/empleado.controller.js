"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmpleadoController {
    constructor() {
        this.getEmpleados = (req, res) => {
            const empleados = [
                {
                    "id": 1,
                    "nombre": "Juan Pérez",
                    "correo": "juan.perez@empresa.com",
                    "departamento": "IT",
                    "telefono": "123456789"
                },
                {
                    "id": 2,
                    "nombre": "María Gómez",
                    "correo": "maria.gomez@empresa.com",
                    "departamento": "Marketing",
                    "telefono": "987654321"
                }
            ];
            res.status(200).json({ empleados });
        };
        this.getEmpleado = (req, res) => {
            const { id } = req.params;
            res.status(200).json({
                "message": "Empleado encontrado",
                id,
            });
        };
        this.createEmpleado = (req, res) => {
            const { body } = req;
            res.status(200).json({
                "message": "Empleado creado",
                "statusCode": 200,
                body,
            });
        };
    }
}
exports.default = EmpleadoController;
