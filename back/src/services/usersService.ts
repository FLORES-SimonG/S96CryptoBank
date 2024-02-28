import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";

let users:IUser[] = [
    {
        id:1,
        name:"Simón",
        email:"simonflores@mail.com",
        active:true
    }
];
let id:number = 2;

export const createUserService = async(userData:UserDto):Promise<IUser> => {
    //recibir los datos del usuario
    //crear un nuevo usuario
    //incluir el nuevo usuario en el array
    //retornar el nuevo objeto creado

    const newUser:IUser = {
        id,
        name:userData.name,
        email:userData.email,
        active:userData.active
    }; 
    users.push(newUser);
    id++;
    return newUser;
};
export const getUserService = async(): Promise<IUser[]>=> {
    return users;

};
export const deleteUserService = async(id:number):Promise<void> => {
    users =users.filter((user:IUser) => user.id !== id);
};