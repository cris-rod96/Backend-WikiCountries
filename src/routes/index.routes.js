import { Router } from "express";

import activityRoutes from "./activity/index.route.js";
import authRoutes from "./auth/index.route.js";
import countryRoutes from "./country/index.route.js";
import userRoutes from "./user/index.route.js";
import { bcryptMiddleware } from "../middlewares/index.middlewares.js";
const router = Router();

router.use("/activities", bcryptMiddleware.validateJWT, activityRoutes);
router.use("/auth", authRoutes);
router.use("/countries", countryRoutes);
router.use("/users", userRoutes);
export default router;
