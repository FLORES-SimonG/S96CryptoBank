import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import { createUserService, getUserService } from "../services/usersService";

export const getAllUsers = async(req: Request, res: Response) => {
    const getUserFunction = await getUserService();
    res.status(200).json(getUserFunction);
};

export const getUserByID = (req: Request, res: Response) => {
    res.status(200).json({ message: "LISTADO LLAMADO POR ID" });
};


export const createUser = async(req:Request,res:Response) => {
    const { id, name, email, birthdate,nDni,credencialsId } = req.body;
    const newUser:IUser = await createUserService({ id, name, email, birthdate, nDni, credencialsId}) ;
    res.status(201).json(newUser);    
};

export const loginUser = (req: Request, res: Response) => {
    res.status(200).json({ message: "LOGIN" });
}







// import { createUserService,deleteUserService,getUserService } from "../services/usersService";
// import IUser from "../interfaces/IUser";



// export const createUser = async(req:Request,res:Response) => {
//     const { name, email, active } = req.body;
//     const newUser:IUser = await createUserService({name,email,active});
//     res.status(201).json(newUser);

// };
// export const getUser = async(req:Request,res:Response) => {
 
//     const users:IUser[]=await getUserService();
//     res.status(200).json(users);
// };
// export const deleteUser = async(req:Request,res:Response) => {
 
//     const { id } = req.body;
//     await deleteUserService(id);
//     res.status(200).json({message:"Usuario eliminado CORRECTAMENTE"});
// };

