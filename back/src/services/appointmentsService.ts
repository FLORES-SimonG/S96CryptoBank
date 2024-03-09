import { AppointmentRepository } from "../Repositories/AppointmentRepository";
import { UserRepository } from "../Repositories/UserRepository";
import { AppointmentDto } from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";

export const createAppointmentService = async (createTurn: AppointmentDto):Promise<Appointment|Error> => {
  const userExist = await UserRepository.findOneBy({ id: createTurn.userId });
  if (!userExist) {
    throw Error("NO ENCONTRAMOS EL USUARIO");
  }
  const newDate = await AppointmentRepository.create({
    ...createTurn,
    user: userExist.id,
    status: "active",
  });

  await AppointmentRepository.save(newDate);
  return newDate;
};

export const getAllAppointmentsService = async ():Promise<Appointment[]> => {
  const appointments = await AppointmentRepository.find();
  if (appointments.length === 0) {
    throw new Error("No hay turnos disponibles.");
  }
  return appointments;
};


export const getAppointmentByIdService = async (id: number) => {
  const foundAppointment = AppointmentRepository.findBy({ id: id });
  if ((await foundAppointment).length === 0) {
    throw new Error("No se encontró el turno solicitado.");
  }
  return foundAppointment;
};

export const cancelAppointmentService = async (id: number):Promise<Appointment|null> => {
  const appointment = await AppointmentRepository.findOneBy({ id });
  if (appointment===null) {
    throw new Error("No se encontró el turno solicitado para cancelar.");
  }
  appointment.status = "cancelled";
    await AppointmentRepository.save(appointment);
  return appointment;
};