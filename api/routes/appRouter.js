import express from "express";
import Users from "../controllers/userController";
import CarsInfos from "../controllers/carInfoController";
import Images from "../controllers/imagesController";
import Places from "../controllers/googleplaces";

const app = express();
const router = express.Router();
const users = new Users();
const carsInfos = new CarsInfos();
const images = new Images();
const places = new Places();

router.post("/auth/signup", users.add_user);
router.post("/auth/login", users.login_user);

router.get("/cars/", carsInfos.loadAllCars);
router.post("/cars/", carsInfos.loadMyCars);

router.get("/cars/:id", carsInfos.loadCar);
router.delete("/cars/:id", carsInfos.removeCar);

router.post("/cars/add-new-car/", carsInfos.addCar);

router.get("/cars/edit/:id", carsInfos.editCar);
router.post("/cars/edit/:id", carsInfos.saveEditedCar);

router.post("/images/upload/", images.addImage);
router.post("/images/remove/", images.removeImage);

router.post("/places/", places.search);
router.post("/place/", places.findByPlaceId);

export default router;
