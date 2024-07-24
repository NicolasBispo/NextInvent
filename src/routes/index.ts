import { Router } from "express";
import { productRouter } from "./productsRoutes";
import { sectionRouter } from "./sectionRoutes";

const router = Router()


router.use("/products", productRouter)
router.use("/sections", sectionRouter)

export default router