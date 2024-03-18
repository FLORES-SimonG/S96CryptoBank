import { Request, Response } from "express";

import {  cancelAppointmentService,createAppointmentService, getAllAppointmentsService, getAppointmentByIdService} from "../services/appointmentsService";
import { AppointmentDto } from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";

//!-----------------------------LISTA DE APPOINTMENTS-------------------------------------------------------------------------
export const getAppointmentController= async (req:Request, res: Response):Promise<Appointment[]|void>=>{
  try{
      const appointments= await getAllAppointmentsService();
      res.status(200).json(appointments);
  }catch (error:any) {res.status(404).json({message:error.message}) }
}

//!-----------------------------TOMAR UN APPOINTMENT ESPECIFICO POR ID------------------------------------------------------
export const getAppointmentByIdController = async (req: Request,res: Response):Promise<Appointment[]|void> => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const appointment = await getAppointmentByIdService(appointmentId);
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      throw new Error("No se encontró el turno solicitado.");
    }
  } catch (error:any) {
    res.status(404).json({ message: error.message });
  }
};
//!-----------------------------CREAR UN APPOINTMENT-------------------------------------------------------------------------
export const addAppointmentController = async(req: Request, res: Response): Promise<Appointment|void> => {
  try {
      const { date, time, userId } = req.body;
      if (!userId) {
          throw Error("Se requiere el ID del usuario para crear un turno.");
      }
      if ( typeof date !== "string" || typeof time !== "string" || typeof userId !== "number") {
          throw Error("Los datos ingresados son incorrectos.");
      }
      const newAppointmentData: AppointmentDto = {
          date: date,
          time: time,
          userId: userId
      };
      const newAppointment = await createAppointmentService(newAppointmentData);
      res.status(201).json(newAppointment);
  } catch (error:any) {
      res.status(400).json({ message: error.message });
  }
};
//!-----------------------------CANCELAR UN APPOINTMENT-------------------------------------------------------------------------
export const cancelAppointmentController = async (req: Request, res: Response):Promise<void|Error> => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const cancelledAppointment = await cancelAppointmentService(appointmentId);
    if (cancelledAppointment) {
      res.status(200).json(cancelledAppointment);
    } else {
      throw new Error("No se encontró el turno solicitado para cancelar.");
    }
  } catch (error:any) {
    res.status(404).json({ message: error.message });
  }
};
