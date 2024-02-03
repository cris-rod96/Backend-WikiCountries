import { Router } from "express";
import countryRoutes from "./country/index.route.js";
import userRoutes from "./user/index.route.js";

const router = Router();

router.use("/countries", countryRoutes);
router.use("/users", userRoutes);
export default router;
