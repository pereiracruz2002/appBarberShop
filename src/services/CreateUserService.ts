import { hash } from 'bcryptjs';
import UsersRepositories from '../repositories/UsersRepositories'


interface ICreateUser{
    name: string;
    email: string;
    password_hash: string;
    provider: boolean;
}


export default class CreateUserService{
    
    async execute({name, email, password_hash, provider}: ICreateUser){
        const userRepositories = new UsersRepositories();
        if(await userRepositories.userExist(email)){
            throw new Error('User already exists');
        }

        const password = await hash(password_hash,8);

        const user =  await userRepositories.create({
            name,
            email,
            password_hash: password,
            provider,
        })

        return user;
    }
}