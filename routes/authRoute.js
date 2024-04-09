import express from 'express'

import {registerController} from '../controllers/authController.js'
const router=express.Router();
//routing start here 
//Register|| method -post 

router.post('/register',registerController)


export default router;