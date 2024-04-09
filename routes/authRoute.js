import express from 'express'

import {registerController,loginController} from '../controllers/authController.js'
const router=express.Router();
//routing start here 
//Register|| method -post 

router.post('/register',registerController)

//Login || POST
router.post("/login",loginController)

export default router;