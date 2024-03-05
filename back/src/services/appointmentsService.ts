import { AppointmentModel, UserModel } from "../config/data-source";
import { AppointmentDto } from "../dto/AppointmentDto";

export const createAppointmentService = async (createTurn: AppointmentDto) => {
  const userExist = await UserModel.findOneBy({ id: createTurn.userId });
  if (!userExist) {
    throw Error("NO ENCONTRAMOS EL USUARIO AMIGUITO");
  }
  const newDate = await AppointmentModel.create({
    ...createTurn,
    user: userExist.id,
    status: "active",
  });

  await AppointmentModel.save(newDate);
  return newDate;
};

export const getAllAppointmentsService = async () => {
  const appointments = await AppointmentModel.find();
  return appointments;
};

export const cancelAppointmentService = async (id: number) => {
  const appointment = await AppointmentModel.findOneBy({ id });
  if (appointment) {
    appointment.status = "cancelled";
    await AppointmentModel.save(appointment);
  }
  return appointment;
};

export const getAppointmentByIdService = async (id: number) => {
  const foundAppointment = AppointmentModel.findBy({ id: id });
  return foundAppointment;
};
