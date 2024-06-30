import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

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
        res.status(200).json({ empleados });
    }

    public getEmpleado = (req: Request, res: Response) => {        
        const { id } = req.params;
        res.status(200).json({
            "message": "Empleado encontrado",
            id,
        });
    }

    public createEmpleado = (req: Request, res: Response) => {
        const { body } = req;
        res.status(200).json({
            "message": "Empleado creado",
            "statusCode": 200,
            body,
        });
    }
}