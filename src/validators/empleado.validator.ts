import { ValidationChain, check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export const empleadoBody: ValidationChain[] = [
    check('nombre').isString().withMessage('El nombre es requerido y debe ser una cadena de texto'),
    check('correo').isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
    check('departamento').optional().isString().withMessage('El departamento debe ser una cadena de texto'),
    check('telefono').optional().isString().withMessage('El teléfono debe ser una cadena de texto')
];

// Middleware para responder errores de validación en el metodo POST.
export const postValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Errores en la solicitud",
            statusCode: 400,
            errors: errors.array(),
        });
    }
    next();
};