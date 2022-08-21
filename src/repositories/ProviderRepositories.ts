import { PrismaClient } from "@prisma/client";

export default class ProviderRepositories{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async listAll(){
        return this.prisma.user.findMany({
            where:{
                provider:{
                    equals:true
                }
            }
        })
    }
}