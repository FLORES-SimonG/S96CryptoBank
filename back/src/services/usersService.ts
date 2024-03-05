import { UserModel } from "../config/data-source"; //! UserModel= AppDataSource.getRepository(User);
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialsService";

// let users:IUser[] = [
//     {
//     "name": "Simón G. Flores",
//     "email": "simonflores@mail.com",
//     "birthdate": "20.03.1994",
//     "nDni": 123456789,
//     "username": "SimonGF-NOB",
//     "password": "1234"
//  }
// ];

// let users: IUser[] = [];
// let id: number = 0;

export const createUserService = async (name: string, email: string, birthdate: string, nDni: number, username: string, password: string): Promise<User> => {
  // Crear nuevo usuario en la base de datos
  const newUser = UserModel.create({ name, email, birthdate, nDni });
  await UserModel.save(newUser);

  // Crear nuevas credenciales y vincularlas al nuevo usuario
  await createCredentialsService(newUser.id, {
    username, password,
   
  });

  // Devolver el nuevo usuario
  return newUser;
};

export const getUserService = async (): Promise<IUser[]> => {
  const users = await UserModel.find(); 
  return users;
};

// export const getUserByIdService = async (id: number) => {
//   const user =  UserModel.findOneBy({id});
//   if (!user) {
//     throw new Error(`Usuario turno con el ID ${id} no fue encontrado AMIGUIS.`);
//   }
//   return user;
// };

export const getUserByIdService= async (id:number): Promise< User| null>=>{
  const founduser= await UserModel.findOneBy({id});
  if(!founduser) throw Error("usuario no encontrado")
  return founduser
}

// export const deleteUserService = async(id:number):Promise<void> => {
//     users =users.filter((user:IUser) => user.id !== id);
// };
