import express from "express";
import { getAllUserInfoUser, registerUser } from "./user.controller.js";
import validateRequest from "../../../middlewares/validateRequest.js";
import { createUserSchema } from "./user.validation.js";

const router = express.Router();

router.post("/register", validateRequest(createUserSchema), registerUser);
router.get("/get-all-user-info", getAllUserInfoUser);

export default router;
