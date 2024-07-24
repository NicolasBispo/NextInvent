import { Request, Response } from "express";
import { ProductService } from "../services/productService";
import { ProductRequest } from "../interfaces/requests";
import { BaseController } from "./baseController";

const productService = new ProductService();
export class ProductController extends BaseController {
  constructor() {
    super();
  }

  async index(req: Request, res: Response) {
    const page = parseInt((req.query.page as string) || "1");
    const perPage = parseInt((req.query.perPage as string) || "1");

    const totalItems = await productService.count({});
    const totalPages = Math.ceil(totalItems / perPage);
    const results = await productService.findAll({
      skip: (page - 1) * perPage,
      take: perPage,
    });
    res.status(200).json({
      page,
      perPage,
      results,
      totalItems,
      totalPages,
    });
  }

  async show(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = await productService.findOne({
      where: {
        id,
      },
    });
    if (!product) {
      return res.status(404).end();
    }
    return res.status(200).json(product);
  }

  async create(req: ProductRequest, res: Response) {
    try {
      const productData = req.body;
      console.log('Product data:', productData)
      const product = await productService.create({ data: {...productData} });
      return res.status(200).json(product);
    } catch (error) {
      console.error(error)
      return res.status(500).json(error);
    }
  }

  async update(req: ProductRequest, res: Response) {
    try {
      const productData = req.body;

      const product = productService.update({
        where: {
          id: productData.id,
        },
        data: {...productData}
      });
      res.status(200).json(product)
    } catch (error) {
      res.status(501).json(error);
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      await productService.delete({
        where: { id },
      });
      return;
    } catch (error) {
      res.status(501).json(error);
    }
  }
}
