import ICredentials from "../interfaces/ICredentials";
import { CredentialsModel } from "../config/data-source";
import CredentialsDto from "../dto/CredentialsDto";
import { UserModel } from "../config/data-source";

// Aquí usarías una base de datos real, pero para este ejemplo usaremos un arreglo
let credentials: ICredentials[] = [];

export const createCredentialsService = async (userId: number, credential: CredentialsDto): Promise<ICredentials> => {
  // Crear nuevas credenciales en la base de datos
  const newCredentials = CredentialsModel.create(credential);
  await CredentialsModel.save(newCredentials);

  // Asociar las credenciales con el usuario correspondiente
  const user = await UserModel.findOneBy({ id: userId });
  if (!user) {
      throw new Error("Usuario no encontrado");
  }

  // Vincular el ID de las nuevas credenciales al usuario
  user.credencialsId = newCredentials.id;
  await UserModel.save(user);

  // Devolver las nuevas credenciales
  return newCredentials;
};

export const validateCredentials = async ( credentialDto: CredentialsDto ) => {
  const findCredential =await CredentialsModel.findOneBy({ username: credentialDto.username });
  
  if (!findCredential) throw new Error('El usuario no existe.');

  if(findCredential.password !== credentialDto.password) throw new Error('Contraseña incorrecta.');

  return (findCredential.id);
};
// export const validateCredential= async (validateCredentialDto:ICredentialDto)=>  {
//   const findCredential = await CredentialModel.findOneBy({ username: validateCredentialDto.username });

//   if (!findCredential) throw new Error('El usuario no existe.');

//   if(findCredential.password !== validateCredentialDto.password) throw new Error('Contraseña incorrecta.');

//   return (findCredential.id);
// }