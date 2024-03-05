import { Router } from "express";

import {
  createUserController,
  getAllUsersController,
  getUserById,
  loginUserController,
} from "../controllers/usersController";

const userRouter: Router = Router();

userRouter.get("/", getAllUsersController);
userRouter.get("/:id", getUserById);
userRouter.post("/register", createUserController);
userRouter.post("/login", loginUserController);

export default userRouter;
