import { PrismaClient, User } from "@prisma/client";

export default class UsersRepositories{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async userExist(email: string){
        return this.prisma.user.findFirst({
            where:{
                email:{
                    equals: email,
                }
            }
        })
    }

    
    
    async create(data: Omit<User,'id'>){
        try{
            return this.prisma.user.create({
                data:{
                    ...data
                }
            })
        }catch(e){
            return e;
        }
    }

    async update(id: string,data: Omit<User,'id'>){
        return this.prisma.user.update({
            where:{
                id:id
            },
            data:{
                ...data
            }
        })
    }

    async listAll(){
        return this.prisma.user.findMany({
            select:{
                name: true,
                email: true,
                provider: true


            }
        })
    }

}