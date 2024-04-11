import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createCategoryController,deleteCategoryController,getCategoryController,sigleCategoryController,updateCategoryController } from "../controllers/createCategoryController.js";
const router = express.Router();
//crete categories
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//update categories 
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)
//get all category 

router.get("/category",requireSignIn,isAdmin,getCategoryController)

//get single category 
router.get("/single-category/:slug",sigleCategoryController)

//delete category

router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)
export default router;
