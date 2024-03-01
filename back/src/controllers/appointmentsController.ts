// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.


import { Request, Response } from "express";

export const getAllAppointments = (req: Request, res: Response) => {
    res.status(200).json({ message: "LISTADO DE TURNOS 2" });
}

export const getAppointment = (req: Request, res: Response) => {
    res.status(200).json({ message: "LISTADO DE TURNOS" });
}; 

export const scheduleAppointment = (req: Request, res: Response) => {
    res.status(201).json({ message: "TURNO AGENDADO" });
};

export const cancelAppointment = (req: Request, res: Response) => {
    res.status(200).json({ message: "TURNO CANCELADO" });
};
