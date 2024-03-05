import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import {createUserService, getUserService, getUserByIdService} from "../services/usersService";
import { validateCredentials } from "../services/credentialsService";
//!-----------------------------LISTA DE USUARIOS-------------------------------------------------------------------------
export const getAllUsersController = async (req: Request, res: Response) => {
  const users = await getUserService();
  res.status(200).json(users);
};
//!-----------------------------TOMAR UN USUARIO ESPECIFICO POR ID------------------------------------------------------

export const getUserById= async(req:Request, res: Response)=>{
  const {id}= req.params;
  try{
      const founduser=await getUserByIdService(Number(id))
      res.status(200).json(founduser)
  }
  catch(error:any){
      res.status(400).json({message:error.message})
  }
}

// export const getUserByIDController = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const user = getUserByIdService(parseInt(id));
//   if (user) {
//     res.status(200).json(user);
//   } else {
//     res.status(404).json({ message: "USUARIO NO ENCONTRADO AMIGO" });
//   }
// };
//!-----------------------------CREAR UN USUARIO-------------------------------------------------------------------------
export const createUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser = await createUserService(name, email, birthdate, nDni, username, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: `Error en el servidor al crear el usuario: ${error}` });
  }
};
//!-----------------------------LOGEARSE-------------------------------------------------------------------------
export const loginUserController = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const credentialsId = await validateCredentials({username, password});
    if (credentialsId) {
      res.status(200).json({message: `LOGIN CORRECTO, AMIGO. TOME SU ID DE LA CREDENCIAL: ${credentialsId}`});
    }
  } catch (error) {
    res.status(500).json({message: `ERROR EN EL SERVIDOR PARA LOGEARSE, PICHÓN: ${error}`});
  }};
//!---------------------------------------------------------------------------------------------------------------------

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
