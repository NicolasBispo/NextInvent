import { Router } from "express";
import { SectionController } from "../controllers/sectionController";

const router = Router()

const sectionController = new SectionController()
router.get("/", sectionController.index)
router.get("/:id", sectionController.show)
router.post("/", sectionController.create)
router.put("/:id", sectionController.update)
router.patch("/:id", sectionController.update)
router.delete("/:id", sectionController.destroy)


export const sectionRouter = router