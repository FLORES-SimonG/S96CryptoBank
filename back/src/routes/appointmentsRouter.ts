import {Router} from "express";
import { getAllAppointments } from "../controllers/appointmentsController";
import { cancelAppointment, getAppointment, scheduleAppointment } from "../controllers/appointmentsController";




const appointmentsRouter: Router=Router();

appointmentsRouter.get("/", getAllAppointments)

appointmentsRouter.get("/", getAppointment);
appointmentsRouter.post("/schedule", scheduleAppointment );
appointmentsRouter.put("/cancel", cancelAppointment);

export default appointmentsRouter;


