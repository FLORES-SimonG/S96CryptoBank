
import { Router } from "express";
import { createUser, deleteUser, getUser } from "../controllers/usersController";
import auth from "../middlewares/autenticacion";
const router:Router = Router();



router.post("/users",createUser);
router.get("/users",auth, getUser);
router.delete("/users",deleteUser);





export default router;

