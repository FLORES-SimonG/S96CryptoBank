import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";

let users:IUser[] = [
    {
        id: 1,
        name: "Simón G. Flores",
        email: 'simonflores@mail.com',
        birthdate: new Date(1990, 5, 15),
        nDni: 123456789,
        credencialsId: 987654321,
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
        birthdate: new Date(userData.birthdate),
        nDni:userData.nDni,
        credencialsId:userData.credencialsId,
        
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