import express from "express";
import Users from "../controllers/userController";

const app = express();
const router = express.Router();
const users = new Users();

router.post("/auth/signup", users.add_user);
router.post("/auth/login", users.login_user);

export default router;
