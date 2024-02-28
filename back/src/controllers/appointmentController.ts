// GET /appointment => Obtener el detalle de un turno específico.
// POST /appointment/schedule => Agendar un nuevo turno.
// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.

import { Request, Response } from "express";

export const getAppointment = (req: Request, res: Response) => {
    res.status(200).json({ message: "LISTADO DE TURNOS" });
}; 

export const scheduleAppointment = (req: Request, res: Response) => {
    res.status(201).json({ message: "TURNO AGENDADO" });
};

export const cancelAppointment = (req: Request, res: Response) => {
    res.status(200).json({ message: "TURNO CANCELADO" });
};


// export const getAllUsers = (req: Request, res: Response) => {
//     res.status(200).json({ message: "LISTADO EN PROCESO" });
//     };

// export const getUserByID = (req: Request, res: Response) => {
//     res.status(200).json({ message: "LISTADO LLAMADO POR ID" });
//     };


// export const createUser = (req:Request,res:Response) => {
//     res.status(200).json({ message: "REGISTRADO" });
    
// };


// export const loginUser = (req: Request, res: Response) => {
//     res.status(200).json({ message: "LOGIN" });
    
