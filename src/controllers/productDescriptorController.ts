import { Request, Response } from "express";
import { ProductDescriptorService } from "../services/productDescriptorService";
import { ProductDescriptorRequest } from "../interfaces/requests";
import { BaseController } from "./baseController";

const productDescriptorService = new ProductDescriptorService();
export class ProductDescriptorController extends BaseController {
  constructor() {
    super();
  }

  async index(req: Request, res: Response) {
    const productId = parseInt(req.params.productId);

    const results = await productDescriptorService.findAll({
      where: {productId},
    });
    res.status(200).json({
      productDescriptors: results,
    });
  }

  async show(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = await productDescriptorService.findOne({
      where: {
        id,
      },
    });
    if (!product) {
      return res.status(404).end();
    }
    return res.status(200).json(product);
  }

  async create(req: ProductDescriptorRequest, res: Response) {
    try {
      const productDescriptorData = req.body;
      const product = await productDescriptorService.create({
        data: {...productDescriptorData},
      });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req: ProductDescriptorRequest, res: Response) {
    try {
      const productDescriptorData = req.body;

      const productDescriptor = productDescriptorService.update({
        where: {
          id: productDescriptorData.id,
        },
        data: {...productDescriptorData}
      });
      res.status(200).json(productDescriptor)
    } catch (error) {
      res.status(501).json(error);
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      await productDescriptorService.delete({
        where: { id },
      });
      return;
    } catch (error) {
      res.status(501).json(error);
    }
  }
}
