import express from "express";
import Users from "../controllers/userController";
import CarsInfos from "../controllers/carInfoController";
import Images from "../controllers/imagesController";

const app = express();
const router = express.Router();
const users = new Users();
const carsInfos = new CarsInfos();
const images = new Images();

router.post("/auth/signup", users.add_user);
router.post("/auth/login", users.login_user);

router.get("/cars/", carsInfos.loadAllCars);
router.get("/cars/:id", carsInfos.loadCar);
router.delete("/cars/:id", carsInfos.removeCar);
router.post("/cars/", carsInfos.loadMyCars);
router.post("/cars/add-new-car/", carsInfos.addCar);

router.post("/images/upload/", images.addImage);
router.post("/images/remove/", images.removeImage);

export default router;
