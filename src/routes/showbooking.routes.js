import { showbooking } from "../controllers/showbooking.controller.js";
import { Router } from "express";

const showBookingRouter = Router();

showBookingRouter.route("/").get(showbooking);

export default showBookingRouter;
