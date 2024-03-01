enum IAppointmentStatus {
  active = "activo",
  cancelled = "cancelado"
}



interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: IAppointmentStatus;
}

export default IAppointment;
