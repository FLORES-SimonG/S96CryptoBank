import { AppointmentModel, UserModel } from "../config/data-source";
import { AppointmentDto } from "../dto/AppointmentDto";
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
// let appointments: AppointmentDto[] = [];
// let id: number = 0;

export const createAppointmentService = async (createTurn:AppointmentDto) => {
  
  const userExist = await UserModel.findOneBy({id: createTurn.userId});
  if (!userExist)
  {throw Error("NO ENCONTRAMOS EL USUARIO AMIGUITO");}
  const newDate = await AppointmentModel.create({...createTurn, user: userExist.id,status: "active"});
  
  await AppointmentModel.save(newDate)
  return newDate;
  
  // const newAppointment = AppointmentModel.create({date,time,id}); //! creo un nuevo turno en la base de datos
  // await AppointmentModel.save(newAppointment);//! guardo el turno en la base de datos

  // return newAppointment;
};


export const getAllAppointmentsService = async ()=> {
  const appointments = await AppointmentModel.find();
  return appointments;
  
};

// export const getAppointmentService = async (id: number): Promise<IAppointment | undefined> => {
//   return appointments.find((appointment) => appointment.id === id);
// };

export const cancelAppointmentService = async (id: number) => {
  const appointment = await AppointmentModel.findOneBy({id});
  if (appointment) {
    appointment.status = "cancelled";
    await AppointmentModel.save(appointment); 
  }
  return appointment;
};

export const getAppointmentByIdService = async (id: number) => {
  const foundAppointment = AppointmentModel.findBy({id: id});
  return foundAppointment;
};
