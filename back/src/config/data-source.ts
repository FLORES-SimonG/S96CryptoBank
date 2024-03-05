import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credentials } from "../entities/Credentials";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "demo_typeorm",
    synchronize: true,
    // dropSchema: true,
    logging: ["error"],
    entities: [User, Appointment, Credentials],
    subscribers: [],
    migrations: [],
})

export const UserModel= AppDataSource.getRepository(User);  
export const AppointmentModel= AppDataSource.getRepository(Appointment);
export const CredentialsModel= AppDataSource.getRepository(Credentials);

