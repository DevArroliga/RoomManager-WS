import { Router } from "express";
import EmpleadoController from "../controllers/empleado.controller";
import { postValidationErrors, empleadoBody } from "../validators/empleado.validator";

const empleadoController: EmpleadoController = new EmpleadoController();
const empleadoRouter: Router = Router();

// Rutas del endpoint /api/empleados
empleadoRouter.get('/', empleadoController.getEmpleados);
empleadoRouter.get('/:id', empleadoController.getEmpleado);
empleadoRouter.post('/', empleadoBody, postValidationErrors, empleadoController.createEmpleado);

export default empleadoRouter;