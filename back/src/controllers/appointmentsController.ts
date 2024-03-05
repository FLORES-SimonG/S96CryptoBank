import { Request, Response } from "express";

import {  cancelAppointmentService,createAppointmentService, getAllAppointmentsService, getAppointmentByIdService} from "../services/appointmentsService";
import { AppointmentDto } from "../dto/AppointmentDto";
//!--------------------------------------------------------------------------------------------------------------------------------------------------------
export const getAppointmentController = async (req: Request, res: Response) => {
  try {
    const appointments = await getAllAppointmentsService();
    res.status(200).json(appointments);
  } catch (error:any) {res.status(500).json({ message: `Problemón en solicitar turnos. Error: ${error.message}` });
  }
};

export const getAppointmentByIdController = async (req: Request,res: Response) => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const appointmentEncontrado = await getAppointmentByIdService(appointmentId);
    if (appointmentEncontrado) {
      res.status(200).json(appointmentEncontrado);
    }
  } catch (error:any) {
    res.status(404).json({ message: `Problemón en solicitar turnos. Error :${error.message}` });
  }
};

export const addAppointmentController = async (req: Request, res: Response) => {
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
    res.status(500).json({message: `Problemón en CREAR el turno porque el SERVIDOR ANDA MAL CHE. Error :${error.message}`});
  }
  // export const scheduleNewAppointment = async(req: Request, res: Response) => {
  //   try {
  //       // Obtener los datos de la solicitud
  //       const { date, time, userId } = req.body;
  //       // Verificar si se proporcionó el ID del usuario
  //       if (!userId) {
  //           return res.status(400).json({ message: "Se requiere el ID del usuario para crear un turno." });
  //       }
  //       // Crear un objeto IAppointmentDto con los datos de la solicitud
  //       const newAppointmentData: IAppointmentDto = {
  //           date: date,
  //           time: time,
  //           userId: userId
  //       };
  //       // Llamar a la función createAppointmentService para crear un nuevo turno
  //       const newAppointment = await createAppointmentService(newAppointmentData);
  //       res.status(201).json(newAppointment);
  //   } catch (error:any) {
  //       res.status(500).json({ message: error.message });
  //   }
  // };
};

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
