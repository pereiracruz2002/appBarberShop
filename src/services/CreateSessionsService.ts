import { compare } from  'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import { User } from "@prisma/client"
import UsersRepositories from "../repositories/UsersRepositories"

interface ICreateSession{
    email: string,
    password: string
}

interface IResponse{
    user:User,
    token: string
}

export default class CreateSessionsService{
    async execute({email, password}: ICreateSession): Promise<IResponse>{
        const userRepositories = new UsersRepositories();
        const user = await userRepositories.userExist(email);
        if(!user){
            throw new Error("Email or Password is invalid");
            
        }

        const checkUserPassword = await compare(password, user.password_hash);
        if(!checkUserPassword){
            throw new Error("Email or Password is invalid");
        } 

        const token = sign({},authConfig.jwt.secrect,{
            subject:user.id,
            expiresIn:authConfig.jwt.expireIn
        })
        
        return {user,token};
    }
}