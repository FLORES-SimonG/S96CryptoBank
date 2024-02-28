import {Router} from "express";
import { getAllAppointments } from "../controllers/appointmentsController";

const appointmentsRouter: Router=Router();

appointmentsRouter.get("/", getAllAppointments)

export default appointmentsRouter;


