import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/auth";

interface ITokenPayload{
    iat: number,
    exp: number,
    sub: string
}

export default function isAuthenticate(request: Request, response: Response, next: NextFunction): void{
    const authHeader = request.headers.authorization;
    if(!authHeader){
        throw new Error('JWT Token is missing! ');
    }

    const [,token] = authHeader.split(" ");
    try{
        const decodedToken = verify(token, authConfig.jwt.secrect);
        const { sub } = decodedToken as ITokenPayload;
        request.user = {
            id:sub
        }
        return next();
    }catch{
        throw new Error("Invalid Token");
    }

}