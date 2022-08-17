import UsersRepositories from "../repositories/UsersRepositories";


export default class ListUserService{
    async execute(){
        const userRepositories = new UsersRepositories;
        const users = await userRepositories.listAll();
        return users;
    }
}