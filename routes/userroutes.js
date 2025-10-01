import express from "express";
// import upload from "../config/multer.js";
// import verifyjwt from "../middleware/authmiddleware.js";
import { login, register, updateProfile } from "../controllers/usercontroller.js";
import upload from "../config/multer.js";
import verifyjwt from "../middleware/authmiddleware.js";
const router = express.Router();
router.post("/register", upload.single("file"),register);

// // Login
router.post("/login", login);

// Logout
// router.post("/logout", userController.logout);

// // Update profile (protected)
router.put("/profile", verifyjwt, updateProfile);

export default router;
