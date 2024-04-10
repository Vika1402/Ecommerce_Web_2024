import express from 'express'
 
import {registerController,loginController,testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router=express.Router();
//routing start here 
//Register|| method -post 

router.post('/register',registerController)

//Login || POST
router.post("/login",loginController)
//test route get 
router.get("/test",requireSignIn,isAdmin, testController)

export default router;