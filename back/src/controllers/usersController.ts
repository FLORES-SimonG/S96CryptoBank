import { Request, Response } from "express";
// import IUser from "../interfaces/IUser";
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
      res.status(404).json({message:error.message})
  }
}

//!-----------------------------CREAR UN USUARIO-------------------------------------------------------------------------
export const createUserController = async (req: Request, res: Response)=> {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    if (!name || !email || !birthdate || !nDni || !username || !password) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." }); 
    }
    else{const newUser = await createUserService(name, email, birthdate, nDni, username, password);
    return res.status(201).json(newUser);} 
  } catch (error) {
    return res.status(500).json({ message: `Error en el servidor al crear el usuario: ${error}` }); 
  }
};
//!-----------------------------LOGEARSE-------------------------------------------------------------------------


export const loginUserController = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const credentialsId = await validateCredentials({username, password});
    if (credentialsId) {
      res.status(200).json({message: `LOGIN CORRECTO. CREDENCIAL: ${credentialsId}`});//! MODIFICAR EL MENSAJE. DEBE RETORNAR:
      //! {
      //!   "login": true,
      //!   "user": {
      //!     "id": 1,
      //!     "name": "Carlos Gómez",
      //!     "email": "cgomez@mail.com",
      //!     "birthdate": "1990-01-01",
      //!     "nDni": 12345678
      //!     }
      //!  }
    }
  } catch (error) {
    res.status(500).json({message: `ERROR EN EL SERVIDOR PARA LOGIN: ${error}`});
  }};
//!---------------------------------------------------------------------------------------------------------------------

