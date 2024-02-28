
import { Router } from "express";
// import auth from "../middlewares/autenticacion";
import appointmentRouter from "./appointmentRouters";
import appointmentsRouter from "./appointmentsRouter";
import userRouter from "./userRouter";
const router:Router = Router();



router.use("/users", userRouter);
router.use("/appointment", appointmentRouter);
router.use("/appointments", appointmentsRouter);





export default router;//! exportamos el router para poder usarlo en el server.ts

