"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empleado_model_1 = __importDefault(require("../models/empleado.model"));
class EmpleadoController {
    constructor() {
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const empleados = yield empleado_model_1.default.findAll();
                res.status(200).json({ empleados });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al obtener empleados', error });
            }
        });
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
