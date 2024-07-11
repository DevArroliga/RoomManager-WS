import { Router } from "express";
import EmpleadoController from "../controllers/empleado.controller";
import { postValidationErrors, empleadoBody } from "../validators/empleado.validator";
import UsuarioController from "../controllers/usuario.controller";

const usuarioController: UsuarioController= new UsuarioController();
const usuarioRouter: Router = Router();

// Rutas del endpoint /api/empleados
// empleadoRouter.get('/', empleadoController.getEmpleados);
usuarioRouter.get('/', usuarioController.getUsuarios);

export default usuarioRouter;