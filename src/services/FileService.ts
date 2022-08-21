import FilesRepositories from "../repositories/FilesRepositories";
import UsersRepositories from "../repositories/UsersRepositories";

interface IFiles{
    userId: string,
    name: string,
    path:string
}

export default class FileService{
    async execute({ userId, name, path}: IFiles){
    
        const filesRepositories  = new FilesRepositories();
        const userRepositories = new UsersRepositories();

        
        const files = filesRepositories.create(
            userId,
            name,
            path,
            
        )
        
    }
}