"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleado_controller_1 = __importDefault(require("../controllers/empleado.controller"));
const empleado_validator_1 = require("../validators/empleado.validator");
const empleadoController = new empleado_controller_1.default();
const empleadoRouter = (0, express_1.Router)();
// Rutas del endpoint /api/empleados
// empleadoRouter.get('/', empleadoController.getEmpleados);
empleadoRouter.get('/:id', empleadoController.getEmpleado);
empleadoRouter.post('/', empleado_validator_1.empleadoBody, empleado_validator_1.postValidationErrors, empleadoController.createEmpleado);
exports.default = empleadoRouter;
