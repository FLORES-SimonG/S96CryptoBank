import { Request, Response } from "express";
import { createCredentials, validateCredentials } from "../services/credentialsService";

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const newCredentials = createCredentials(username, password);
    res.status(201).json(newCredentials);
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const credentials = validateCredentials(username, password);
    if (credentials) {
        res.status(200).json({ message: "Login realizado con ÉXITO", credentialsId: credentials.id });
    } else {
        res.status(401).json({ message: "PASSWORD O USER INVALIDO/INVALIDOS" });
    }
};