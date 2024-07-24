import { Prisma, PrismaClient } from "@prisma/client";
export class ProductDescriptorService {
    
    private prisma = new PrismaClient()


    async findAll(conditions : Prisma.ProductDescriptorFindManyArgs){
        return await this.prisma.productDescriptor.findMany(conditions)
    }

    async findOne(conditions : Prisma.ProductDescriptorFindUniqueArgs){
       return await this.prisma.productDescriptor.findUnique(conditions)
    }

    async create(data : Prisma.ProductDescriptorCreateArgs){
        return await this.prisma.productDescriptor.create(data)
    }

    async update(data: Prisma.ProductDescriptorUpdateArgs){
        return await this.prisma.productDescriptor.update(data)
    }
    
    async delete(data: Prisma.ProductDescriptorDeleteArgs){
        return await this.prisma.productDescriptor.delete(data)
    }
}