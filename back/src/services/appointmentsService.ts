import IAppointment from "../interfaces/IAppointment";
// import { getUserByIdService } from "./usersService";
// let appointments: IAppointment[] = [
//   {
//     id: 1,
//     date: "2021-10-10",
//     time: "10:00",
//     userId: 1,
//     status: "active",
//   },
// ];
let appointments: IAppointment[] = [];
let id: number = 0;

export const createAppointmentService = (date: string, time: string, userId: number): IAppointment => {
  const newAppointment: IAppointment = {
    id: id++,
    date,
    time,
    userId,
    status: "active",
  };
  appointments.push(newAppointment);
  return newAppointment;
};
export const getAllAppointmentsService = async (): Promise<IAppointment[]> => {
  return appointments;
};

// export const getAppointmentService = async (id: number): Promise<IAppointment | undefined> => {
//   return appointments.find((appointment) => appointment.id === id);
// };

export const cancelAppointmentService = async (id: number): Promise<IAppointment | undefined> => {
  const appointment = appointments.find((appointment) => appointment.id === id);
  if (appointment) {
    appointment.status = "cancelled";
  }
  return appointment;
};

export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
  const foundAppointment = appointments.find((appointment) => appointment.id === id);
  return foundAppointment;
};
