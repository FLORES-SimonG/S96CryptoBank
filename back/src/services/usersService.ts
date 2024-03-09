import { CredentialsRepository } from "../Repositories/CredentialRepository";
import { UserRepository } from "../Repositories/UserRepository";   //! UserModel= AppDataSource.getRepository(User);
import { AppDataSource } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
// import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialsService";


export const getUserService = async (): Promise<User[]> => {
  const users : User[] = await UserRepository.find({relations:{appointments:true}}); 

  return users;
};

export const getUserByIdService= async (id:number): Promise< User| Error>=>{
  const founduser: User|null= await UserRepository.findOne({ where: { id }, relations: ['appointments'] });
  if(!founduser) throw Error("usuario no encontrado")
  return founduser;
}


// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.

export const createUserService = async(
  createUserDto: UserDto
): Promise<User|Error> =>{

  const QueryRunner= AppDataSource.createQueryRunner();
  await QueryRunner.connect();

  try
  {
      await QueryRunner.startTransaction();

  const validateMail= await UserRepository.findOneBy({email: createUserDto.email})
  if(validateMail) throw Error("ya existe un usuario con ese email")
  const validateNDni=await UserRepository.findOneBy({nDni: createUserDto.nDni})
  if(validateNDni) throw Error("ya existe un usuario con ese DNI")
  const validateUsername=await CredentialsRepository.findOneBy({username: createUserDto.username})
  if(validateUsername) throw Error("ya existe un usuario con ese username")

  const newCredential= await createCredentialsService({
      username: createUserDto.username,
      password: createUserDto.password
  });
  const newUser= await UserRepository.create({ ...createUserDto, credential: newCredential.id })
  await QueryRunner.manager.save(newUser)
  await QueryRunner.commitTransaction();
  return newUser

}catch(error:any){
  await QueryRunner.rollbackTransaction();
  throw Error(error.message)
}finally{
  await QueryRunner.release();
}
}