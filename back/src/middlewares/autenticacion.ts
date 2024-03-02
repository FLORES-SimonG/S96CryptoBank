import { NextFunction, Request, Response } from "express";


const auth =(req:Request,res:Response,next:NextFunction)=>{
    const { token } =req.headers;
    token==='12345'? next():res.status(400).json({message:"ERROR. No estas autorizado"});
};

export default auth;