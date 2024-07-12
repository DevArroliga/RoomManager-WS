"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Empleado from '../models/empleado.model';
class EmpleadoController {
    constructor() {
        // public getEmpleados = async (req: Request, res: Response) => {
        //     try {
        //         const empleados = await Empleado.findAll();
        //         res.status(200).json({ empleados });
        //     } catch (error) {
        //         res.status(500).json({ message: 'Error al obtener empleados', error });
        //     }
        // }
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
