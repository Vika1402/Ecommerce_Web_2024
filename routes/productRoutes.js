import express from 'express';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { barinTreeTokenController, brainTreePaymentController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, productPictureController, searchProductController, updateProductController } from '../controllers/createProductController.js';
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

//product filter 
router.post("/product-filters",productFilterController)

//product count
router.get("/product-count",productCountController)
//product-per page 
router.get("/product-list/:page",productListController)
//serch product router .get 
router.get("/search/:keyword",searchProductController)
//category wise product 
router.get("/product-category/:slug",productCategoryController)

//payments routes
//token
router.get('/braintree/token',barinTreeTokenController)



//bRain tree payment 
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)
export default router;
