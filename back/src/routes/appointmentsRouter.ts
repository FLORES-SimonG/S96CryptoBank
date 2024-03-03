import { Router } from "express";
import auth from "../middlewares/autenticacion";

import {cancelAppointmentController, getAppointmentController, addAppointmentController,getAppointmentByIdController} from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointmentController);
// appointmentsRouter.post("/schedule", addAppointmentController);
appointmentsRouter.post("/schedule", addAppointmentController);
appointmentsRouter.put("/cancel/", cancelAppointmentController);
appointmentsRouter.put("/cancel/:id", cancelAppointmentController);
appointmentsRouter.get("/:id", getAppointmentByIdController);

export default appointmentsRouter;
