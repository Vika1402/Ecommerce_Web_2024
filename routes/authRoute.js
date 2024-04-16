import express from "express";

import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrderConroller,
  getAllOrderController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();
//routing start here
//Register|| method -post

router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);
//test route get
router.get("/test", requireSignIn, isAdmin, testController);

//proteted route auth user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//proteted route auth Admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//forgot password
router.post("/forgot-password", forgotPasswordController);

//updateProfile
router.put("/profile", requireSignIn, updateProfileController);

router.get("/orders", requireSignIn, getOrderConroller);

router.get("/all-orders", requireSignIn, isAdmin, getAllOrderController);

router.put("/order-status/:id", requireSignIn, isAdmin, orderStatusController);

export default router;
