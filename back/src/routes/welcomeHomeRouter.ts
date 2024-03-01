//! Esto es un ejemplo de como se debe de hacer un router, es practica
import { Router } from "express";
import { getWelcome } from "../controllers/welcomeHomeController";

const welcomeRouter: Router = Router();

welcomeRouter.get("/", getWelcome); //! se crea welcomeHomeRouter en función de la petición(ej: GET) éste es en función de la ubicación + mensaje(controlador)--> creo controlador getWelcome.
export default welcomeRouter;
