import { Request, Response } from 'express';

export default class EmpleadoController {
    constructor() { }

    public getEmpleados = (req: Request, res: Response) => {
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
        ]
        res.json({ empleados });
    }
}