import { Router } from "express";

import { createUserController, getAllUsersController, getUserByIDController, loginUserController } from "../controllers/usersController";


const userRouter:Router = Router();

userRouter.get("/",getAllUsersController);
userRouter.post("/register",createUserController);
userRouter.post("/login",loginUserController);
userRouter.get("/:id",getUserByIDController);

export default userRouter;