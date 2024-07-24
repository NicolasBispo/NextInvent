import { Request, Response } from "express";
import { ProductRequest, SectionRequest } from "../interfaces/requests";
import { BaseController } from "./baseController";
import { SectionService } from "../services/sectionService";

const sectionService = new SectionService();
export class SectionController extends BaseController {
  constructor() {
    super();
  }

  async index(req: Request, res: Response) {
    const page = parseInt((req.query.page as string) || "1");
    const perPage = parseInt((req.query.perPage as string) || "1");

    const totalItems = await sectionService.count({});
    const totalPages = Math.ceil(totalItems / perPage);
    const results = await sectionService.findAll({
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
    const product = await sectionService.findOne({
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
      const sectionData = req.body;
      const product = await sectionService.create({ data: sectionData });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req: SectionRequest, res: Response) {
    try {
      const sectionData = req.body;

      const section = sectionService.update({
        where: {
          id: sectionData.id,
        },
        data: {...sectionData}
      });
      res.status(200).json(section)
    } catch (error) {
      res.status(501).json(error);
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      await sectionService.delete({
        where: { id },
      });
      return;
    } catch (error) {
      res.status(501).json(error);
    }
  }
}
