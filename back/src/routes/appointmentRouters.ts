import {Router} from "express";
import { cancelAppointment, getAppointment, scheduleAppointment } from "../controllers/appointmentController";
const appointmentRouter: Router= Router();

appointmentRouter.get("/", getAppointment);
appointmentRouter.post("/schedule", scheduleAppointment );
appointmentRouter.put("/cancel", cancelAppointment);


export default appointmentRouter;