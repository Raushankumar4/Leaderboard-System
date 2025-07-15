import { Router } from "express";
import {
  addUser,
  claimPoints,
  getAllUsers,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getAllUsers);
router.route("/").post(addUser);
router.route("/claim").post(claimPoints);

export default router;
