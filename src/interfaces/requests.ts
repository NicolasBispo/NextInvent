import { Product, ProductDescriptor, Section } from "@prisma/client";
import { Request } from "express";

export interface ProductRequest extends Request{
    body: Product
}

export interface ProductDescriptorRequest extends Request {
    body: ProductDescriptor;
}


export interface SectionRequest extends Request{
    body: Section
}