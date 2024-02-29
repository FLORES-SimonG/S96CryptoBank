
import { Router } from "express";
// import auth from "../middlewares/autenticacion";
import appointmentRouter from "./appointmentRouters";
import appointmentsRouter from "./appointmentsRouter";
import userRouter from "./userRouter";
import welcomeRouter from "./welcomeHomeRouter";
const router:Router = Router();


router.use("/", welcomeRouter);//! Ruta de bienvenida propia, se puede borrar--> Se usa Router(acá)--> se crea welcomeHomeRouter.ts--> creo controlador.
router.use("/users", userRouter);
router.use("/appointment", appointmentRouter);
router.use("/appointments", appointmentsRouter);





export default router;

