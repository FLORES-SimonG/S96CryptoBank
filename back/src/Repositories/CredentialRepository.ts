import { Credentials } from "../entities/Credentials";
import { AppDataSource } from "../config/data-source";


export const CredentialsRepository= AppDataSource.getRepository(Credentials);
