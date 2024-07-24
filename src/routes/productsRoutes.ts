import { Router } from "express";
import { ProductController } from "../controllers/productController";
import { ProductDescriptorController } from "../controllers/productDescriptorController";
import { productDescriptorRouter } from "./productDescriptorRoutes";

const router = Router()

const productController = new ProductController()

router.get("/", productController.index)
router.get("/:id", productController.index)
router.post("/", productController.create)
router.put("/", productController.update)
router.patch("/", productController.update)
router.delete("/", productController.destroy)

const baseProductDescriptorRoutes = (arg?: string) => arg ? `/:productId/productDescriptors${arg}` : `/:productId/productDescriptors`
const productDescriptorController = new ProductDescriptorController()
router.get(baseProductDescriptorRoutes("/"), productDescriptorController.index)
router.post(baseProductDescriptorRoutes("/"), productDescriptorController.create)
router.put(baseProductDescriptorRoutes("/:id"), productDescriptorController.update)
router.patch(baseProductDescriptorRoutes("/:id"), productDescriptorController.update)
router.delete(baseProductDescriptorRoutes("/:id"), productDescriptorController.destroy)

export const productRouter = router
