"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidationErrors = exports.empleadoBody = void 0;
const express_validator_1 = require("express-validator");
exports.empleadoBody = [
    (0, express_validator_1.check)('nombre').isString().withMessage('El nombre es requerido y debe ser una cadena de texto'),
    (0, express_validator_1.check)('correo').isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
    (0, express_validator_1.check)('departamento').optional().isString().withMessage('El departamento debe ser una cadena de texto'),
    (0, express_validator_1.check)('telefono').optional().isString().withMessage('El teléfono debe ser una cadena de texto')
];
// Middleware para responder errores de validación en el metodo POST.
const postValidationErrors = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Errores en la solicitud",
            statusCode: 400,
            errors: errors.array(),
        });
    }
    next();
};
exports.postValidationErrors = postValidationErrors;
