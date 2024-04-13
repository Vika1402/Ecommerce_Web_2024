import express from 'express';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPictureController, updateProductController } from '../controllers/createProductController.js';
import formidable from 'express-formidable'
const router=express.Router()
router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController)


//get products

router.get("/get-products",getProductController)

//single product

router.get("/get-product/:slug",getSingleProductController)

//get photos

router.get("/product-picture/:pid",productPictureController)
//delete products

router.delete("/delete-product/:pid",requireSignIn,isAdmin,deleteProductController)

//update product details 
router.post("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController)

export default router;
