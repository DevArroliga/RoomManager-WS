import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Usuario from '../models/usuario.model';
// import Empleado from '../models/empleado.model';

export default class UsuarioController {
    constructor() { }

    public getUsuarios = async (req: Request, res: Response) => {
        try {
            const usuarios:Array<Usuario> = await Usuario.findAll();
            res.status(200).json({ usuarios });
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener usuario', error });
        }
    }

}