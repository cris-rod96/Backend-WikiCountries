import { Router } from "express";
import { activityControllers } from "../../controllers/index.controller.js";
const router = Router();

router.get("/list", activityControllers.getActivity.getAll);
router.get("/detail/:id", activityControllers.getActivity.getById);
router.get("/search", activityControllers.getActivity.getByName);

router.post("/create", activityControllers.createActivity);

router.put("/edit/:id", activityControllers.updateActivity);
router.delete("/delete/:id", activityControllers.deleteActivity);

export default router;
