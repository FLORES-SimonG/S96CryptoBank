import { AppDataSource, UserModel } from "../config/data-source";
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

let users: IUser[] = [];
let id: number = 0;

export const createUserService = async (name: string,email: string, birthdate: string, nDni: number, username: string, password: string) => {
  const credencialsId = createCredentialsService(username, password);
  const id = users.length + 1;
  // const newUser: IUser = { id, name, email, birthdate, nDni, credencialsId };
  // users.push(newUser);
  const newUser = UserModel.create({ id,name,email,birthdate,nDni,credencialsId });
  const result = await UserModel.save(newUser);
  return newUser;//? O result "user" || "result"?
};

export const getUserService = async (): Promise<IUser[]> => {
  const users = await UserModel.find(); //! UserModel= AppDataSource.getRepository(User);
  return users;
};

export const getUserByIdService = async (id: number): Promise<IUser> => {
  const user = users.find((user: IUser) => user.id === id);
  if (!user) {
    throw new Error(`Usuario turno con el ID ${id} no fue encontrado AMIGUIS.`);
  }
  return user;
};

// export const deleteUserService = async(id:number):Promise<void> => {
//     users =users.filter((user:IUser) => user.id !== id);
// };
