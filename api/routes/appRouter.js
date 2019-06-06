import express from "express";
import Users from "../controllers/userController";

const app = express();
const router = express.Router();
const users = new Users();

// router.get("/start", users.list_all_users);
router.post("/start", users.add_user);

router.get("/end", (req, res) => {
  res.status(200).send("dupa zbita");
});

export default router;
