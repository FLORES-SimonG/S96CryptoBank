import { Router } from "express";
// import { createUser, deleteUser, getUser } from "../controllers/usersController";
import { createUser, getAllUsers, getUserByID, loginUser } from "../controllers/usersController";


const userRouter:Router = Router();

userRouter.get("/",getAllUsers);
userRouter.post("/register",createUser);
userRouter.post("/login",loginUser);
userRouter.get("/:id",getUserByID);

export default userRouter;