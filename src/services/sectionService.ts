import { Prisma, PrismaClient } from "@prisma/client";
export class SectionService {
    
    private prisma = new PrismaClient()


    async findAll(conditions : Prisma.SectionFindManyArgs){
        return await this.prisma.section.findMany(conditions)
    }

    async findOne(conditions : Prisma.SectionFindUniqueArgs){
       return await this.prisma.section.findUnique(conditions)
    }

    async create(data : Prisma.SectionCreateArgs){
        return await this.prisma.section.create(data)
    }

    async update(data: Prisma.SectionUpdateArgs){
        return await this.prisma.section.update(data)
    }
    
    async delete(data: Prisma.SectionDeleteArgs){
        return await this.prisma.section.delete(data)
    }
    async count(condition: Prisma.SectionCountArgs){
        return await this.prisma.section.count(condition)
    }
}