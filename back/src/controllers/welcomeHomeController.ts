//! Desarrollo getEWlcome con un mensaje.

import { Request, Response } from "express";

export const getWelcome = (req: Request, res: Response) => {
  res.status(200).json({ message: "BIENVENIDO" });
};
