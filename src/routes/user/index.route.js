import { Router } from "express";
import { userControllers } from "../../controllers/index.controller.js";

const router = Router();

router.delete("/delete/:id", userControllers.deleteUser);
router.post("/register", userControllers.registerUser);
router.put("/update/:id", userControllers.updateUser);

export default router;
