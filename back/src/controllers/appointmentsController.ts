import { Request, Response } from "express";

import {  cancelAppointmentService,createAppointmentService, getAllAppointmentsService, getAppointmentByIdService} from "../services/appointmentsService";
import { AppointmentDto } from "../dto/AppointmentDto";

//!-----------------------------LISTA DE APPOINTMENTS-------------------------------------------------------------------------
export const getAppointmentController = async (req: Request, res: Response) => {
  try {
    const appointments = await getAllAppointmentsService();
    if (appointments.length === 0) {
      return res.status(404).json({ message: "No hay turnos disponibles." }); 
    }
    return res.status(200).json(appointments); 
  } catch (error: any) {
    return res.status(500).json({ message: `Problema en solicitar turnos. Error en controller: ${error.message}` }); 
  }
};
//!-----------------------------TOMAR UN APPOINTMENT ESPECIFICO POR ID------------------------------------------------------
export const getAppointmentByIdController = async (req: Request,res: Response) => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const appointmentEncontrado = await getAppointmentByIdService(appointmentId);

    if (appointmentEncontrado.length !==0) {
      return res.status(200).json(appointmentEncontrado);
    }
    else {
      return res.status(404).json({ message: "Turno no encontrado." });
    }
  } catch (error:any) {
    res.status(404).json({ message: `Problema en solicitar turnos. Error en controller :${error.message}` });
  }
};
//!-----------------------------CREAR UN APPOINTMENT-------------------------------------------------------------------------
export const addAppointmentController = async (req: Request, res: Response) => {//!REVISAR ESTA MAL IMPLEMENTADO
  const { date, time, userId} = req.body;
  
  if (!userId) {
    return res.status(400).json({ message: "Se requiere el ID del usuario para crear un turno." });
  }
  try {
    const newAppointmentData : AppointmentDto = {
                date: date,
                time: time,
                userId: userId
            };
    const newAppointment = await createAppointmentService(newAppointmentData);
    res.status(201).json(newAppointment);
  } catch (error:any) {
    res.status(500).json({message: `Problema en CREAR el turno. Error en sección de controller :${error.message}`});
  }
};
//!-----------------------------CANCELAR UN APPOINTMENT-------------------------------------------------------------------------
export const cancelAppointmentController = async (req: Request, res: Response) => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const cancelledAppointment = await cancelAppointmentService(appointmentId);
    if (cancelledAppointment) {
      res.status(200).json(cancelledAppointment);
    } else {
      res.status(404).json({ message: "Turno no encontrado para cancelar." });
    }
  } catch (error:any) {
    res.status(500).json({ message: `Error al cancelar el turno: ${error.message}` });
  }
};
