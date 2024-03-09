import { Appointment } from "../entities/Appointment";
import { AppDataSource } from "../config/data-source";

export const AppointmentRepository= AppDataSource.getRepository(Appointment);
