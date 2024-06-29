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
            res.json({ empleados });
        };
    }
}
exports.default = EmpleadoController;
