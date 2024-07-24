import { Prisma, PrismaClient, Product } from "@prisma/client";
export class ProductService {
    
    private prisma = new PrismaClient()


    async findAll(conditions : Prisma.ProductFindManyArgs) : Promise<Product[]>{
        return await this.prisma.product.findMany(conditions)
    }

    async findOne(conditions : Prisma.ProductFindUniqueArgs){
       return await this.prisma.product.findUnique(conditions)
    }

    async create(data : Prisma.ProductCreateArgs){
        return await this.prisma.product.create(data)
    }

    async update(data: Prisma.ProductUpdateArgs){
        return await this.prisma.product.update(data)
    }
    
    async delete(data: Prisma.ProductDeleteArgs){
        return await this.prisma.product.delete(data)
    }

    async count(data: Prisma.ProductCountArgs){
        return await this.prisma.product.count(data)
    }
}