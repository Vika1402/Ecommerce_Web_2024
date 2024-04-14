import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  
  updateCategoryController,
} from "../controllers/createCategoryController.js";
const router = express.Router();
//crete categories
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//update categories
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//get all category

router.get("/category", requireSignIn, isAdmin, categoryControlller);

//get single category
router.get("/single-category/:slug", singleCategoryController);

//delete category

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);
export default router;
