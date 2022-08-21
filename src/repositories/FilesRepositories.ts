import { Files, Prisma, PrismaClient } from "@prisma/client";

export default class FilesRepositories{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(userId: string, name: string, path: string){
        try{
            return this.prisma.files.create({
                data:{
                    userId,
                    name,
                    path

                }
            })
        }catch(e){
            return e;
        }
    }   
}