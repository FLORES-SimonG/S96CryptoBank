// En el servicio de credenciales:

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.

import ICredentials from "../interfaces/ICredentials";

// Aquí usarías una base de datos real, pero para este ejemplo usaremos un arreglo
let credentials: ICredentials[] = [];

export const createCredentialsService = (
  username: string,
  password: string
): number => {
  // const newCredentials: ICredentials = {
  //     id: credentials.length + 1,
  //     username,
  //     password
  // };
  const id = credentials.length + 1;
  credentials.push({ id, username, password });
  return id;
};

export const validateCredentials = (
  username: string,
  password: string
): number | null => {
  const credencialEncontrada = credentials.find(
    (credential) => (credential.username = username)
  );
  if (credencialEncontrada && credencialEncontrada.password === password) {
    return credencialEncontrada.id;
  } else {
    throw new Error("Credenciales incorrectas");
  }
};

// import {Request, Response} from "express"
// import ICredential from "../Interafaces/ICredentials"

// const createNewCredential= async (req:Request, res:Response)=>{
//     const {username,password}= req.body;
//     let id:number=1
//     const createCredential: ICredential={
//         id,
//         username,
//         password
//     }
//     id ++
//     res.status(201).json(createCredential.id)
// }

// const checkCredential = async (req: Request, res: Response) => {
//     const { username, password } = req.body;

//     if (username !==username) {
//         return res.status(401).json({ error: "Nombre de usuario incorrecto" });
//     }

//     if (password !== password) {
//         return res.status(401).json({ error: "Contraseña incorrecta" });
//     }

//     return res.status(200).json("idCredential");
// };

// export {createNewCredential, checkCredential}
