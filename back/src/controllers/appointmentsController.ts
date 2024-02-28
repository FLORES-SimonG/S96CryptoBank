// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.


import { Request, Response } from "express";

export const getAllAppointments = (req: Request, res: Response) => {
    res.status(200).json({ message: "LISTADO DE TURNOS 2" });
}