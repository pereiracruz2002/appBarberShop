import { hash } from 'bcryptjs';
import UsersRepositories from "../repositories/UsersRepositories";

interface IUpdateUser{
    name: string;
    password_hash: string;
    email: string;
    provider: boolean;
}

export default class UpdateUserService{
    async execute(id: string, {name, password_hash, email, provider}: IUpdateUser){
       const userRepositories = new UsersRepositories();
       const checkEmail = await userRepositories.userExist(email);
       if(checkEmail?.email!=email){
            if(await userRepositories.userExist(email)){
                throw new Error('User already exists!')
            }
       }
        const password = await hash(password_hash,8);
        const user = await userRepositories.update(id,{
            name,
            password_hash: password,
            email,
            provider
        })
        return user;
    }
}