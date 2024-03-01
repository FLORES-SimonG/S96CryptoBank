import UserDto from "../dto/UserDto";
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

let users:IUser[] = [];
let id:number = 2;

export const createUserService = (name:string, email:string, birthdate:string,
    nDni:number, username:string, password:string):IUser => {
    
        const credencialsId = createCredentialsService(username,password);
        const id=users.length+1;
        const newUser:IUser={id,name,email,birthdate,nDni,credencialsId};

     
        users.push(newUser);
        return newUser;
};

export const getUserService = async(): Promise<IUser[]>=> {
    return users;

};

export const getUserByIdService = async(id:number):Promise<IUser|undefined> => {
    return users.find((user:IUser) => user.id === id);
//!throw new error 
};

// export const deleteUserService = async(id:number):Promise<void> => {
//     users =users.filter((user:IUser) => user.id !== id);
// };