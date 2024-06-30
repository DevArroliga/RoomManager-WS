import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Empleado from '../models/empleado.model';

export default class EmpleadoController {
    constructor() { }

    public getEmpleados = async (req: Request, res: Response) => {
        try {
            const empleados = await Empleado.findAll();
            res.status(200).json({ empleados });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener empleados', error });
        }
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