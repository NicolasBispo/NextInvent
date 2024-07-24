import { Router } from "express";
import { ProductDescriptorController } from "../controllers/productDescriptorController";

const router = Router()

const productDescriptorController = new ProductDescriptorController()
router.get("/", productDescriptorController.index)
router.post("/", productDescriptorController.create)
router.put("/", productDescriptorController.update)
router.patch("/", productDescriptorController.update)
router.delete("/", productDescriptorController.destroy)

export const productDescriptorRouter = router
