import { Request, Response } from "express";
// import IUser from "../interfaces/IUser";
import {createUserService, getUserService, getUserByIdService} from "../services/usersService";
import { validateCredentials } from "../services/credentialsService";
import CredentialsDto from "../dto/CredentialsDto";
import { UserRepository } from "../Repositories/UserRepository";
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
// 
export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;

    
    if (
      typeof name === 'string' &&
      typeof email === 'string' &&
      typeof birthdate === 'string' &&
      typeof nDni === 'number' &&
      typeof username === 'string' &&
      typeof password === 'string'
    ) {
      const newUser = await createUserService({ name, email, birthdate, nDni, username, password });
      return res.status(201).json(newUser);
    } else {
      return res.status(400).json({ message: 'Tipos de datos inválidos en la solicitud. Debe estar correctamente completado' });
    }
  } catch (error) {
    return res.status(400).json({ message: `Error en crear el usuario: ${error}` });
  }
};
//!-----------------------------LOGEARSE-------------------------------------------------------------------------
export const loginUserController = async (req: Request, res: Response) => {
  try {
      const login: CredentialsDto = req.body;
      const checkIn = await validateCredentials(login);

      const findUser = await UserRepository.findOneBy({ id: checkIn});
      if (!findUser) throw new Error ('Usuario no encontrado.');

      res.send({
          login: true,
          user: {
              id: findUser.id,
              name: findUser.name,
              email: findUser.email,
              birthdate: findUser.birthdate,
              nDNI: findUser.nDni
          }
      })
  } catch (error: any) {
      res.status(400).json({ message: error.message });
  }
}



