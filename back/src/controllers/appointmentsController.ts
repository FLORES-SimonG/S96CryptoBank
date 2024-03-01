// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.

import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import {
  cancelAppointmentService,
  createAppointmentService,
  getAllAppointmentsService,
  getAppointmentByIdService,
} from "../services/appointmentsService";

export const getAppointmentController = async (req: Request, res: Response) => {
  try {
    const appointments: IAppointment[] = await getAllAppointmentsService();
    res.status(200).json(appointments);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Problemón en solicitar turnos. Error: ${error}` });
  }
};

// export const getAppointmentByIdController =async (req: Request, res: Response) => {
//     res.status(200).json({ message: "BIENVENIDO" });

// }

export const getAppointmentByIdController = async (
  req: Request,
  res: Response
) => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const appointmentEncontrado =
      await getAppointmentByIdService(appointmentId);
    if (appointmentEncontrado) {
      res.status(200).json(appointmentEncontrado);
    }
  } catch (error) {
    res
      .status(404)
      .json({ message: `Problemón en solicitar turnos. Error :${error}` });
  }
};

export const addAppointmentController = async (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  if (!userId) {
    return res
      .status(400)
      .json({ message: "Se requiere el ID del usuario para crear un turno." });
  }
  try {
    const newAppointment = await createAppointmentService(date, time, userId);
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({
      message: `Problemón en CREAR el turno porque el SERVIDOR ANDA MAL CHE. Error :${error}`,
    });
  }
};

export const cancelAppointmentController = async (
  req: Request,
  res: Response
) => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const cancelledAppointment = await cancelAppointmentService(appointmentId);
    if (cancelledAppointment) {
      res.status(200).json(cancelledAppointment);
    } else {
      res.status(404).json({ message: "Turno no encontrado para cancelar." });
    }
  } catch (error) {
    res.status(500).json({ message: `Error al cancelar el turno: ${error}` });
  }
};

// export const getAllAppointmentsController = (req: Request, res: Response) => {
//     res.status(200).json({ message: "LISTADO DE TURNOS 2" });
// }

// export const getAppointmentController = (req: Request, res: Response) => {
//     res.status(200).json({ message: "LISTADO DE TURNOS" });
// };

// export const scheduleAppointmentController = (req: Request, res: Response) => {
//     res.status(201).json({ message: "TURNO AGENDADO" });
// };

// export const cancelAppointmentController = (req: Request, res: Response) => {
//     res.status(200).json({ message: "TURNO CANCELADO" });
// };
