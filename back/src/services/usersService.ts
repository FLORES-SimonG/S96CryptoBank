import { UserModel } from "../config/data-source"; //! UserModel= AppDataSource.getRepository(User);
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
// import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialsService";


export const createUserService = async (name: string, email: string, birthdate: string, nDni: number, username: string, password: string): Promise<User> => {
  // !Creo nuevo usuario en la base de datos
  const newUser = UserModel.create({ name, email, birthdate, nDni });
  // !Guardo el nuevo usuario en la base de datos
  await UserModel.save(newUser);

  //! Crear nuevas credenciales y vincularlas al nuevo usuario que se encuentra en la base de datos que se haran en esa funcion.
  await createCredentialsService(newUser.id, {username, password});

  // Devolver el nuevo usuario
  return newUser;
};

export const getUserService = async (): Promise<UserDto[]> => {//!cambié IUser por UserDto
  const users = await UserModel.find({relations:{appointments:true}}); 

  return users;
};

export const getUserByIdService= async (id:number): Promise< User| null>=>{
  const founduser= await UserModel.findOne({ where: { id }, relations: ['appointments'] });
  if(!founduser) throw Error("usuario no encontrado")
  return founduser
}
