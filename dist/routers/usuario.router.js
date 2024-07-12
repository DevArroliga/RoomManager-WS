"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = __importDefault(require("../controllers/usuario.controller"));
const usuarioController = new usuario_controller_1.default();
const usuarioRouter = (0, express_1.Router)();
// Rutas del endpoint /api/empleados
// empleadoRouter.get('/', empleadoController.getEmpleados);
usuarioRouter.get('/', usuarioController.getUsuarios);
exports.default = usuarioRouter;
