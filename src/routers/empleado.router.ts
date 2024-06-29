import { Router } from "express";
import EmpleadoController from "../controllers/empleado.controller";

const empleadoController: EmpleadoController = new EmpleadoController();
const empleadoRouter: Router = Router();

// Rutas del endpoint /api/empleados
empleadoRouter.get('/', empleadoController.getEmpleados);

export default empleadoRouter;