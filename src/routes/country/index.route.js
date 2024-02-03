import { Router } from "express";
import { countryControllers } from "../../controllers/index.controller.js";
const { getCountries } = countryControllers;

const router = Router();

router.get("/list", getCountries.getAll);
router.get("/detail/:id", getCountries.getByID);
router.get("/search", getCountries.getByName);

export default router;
