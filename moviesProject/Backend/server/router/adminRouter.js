import express from "express";
import {
  checkAdmin,
  getDashboardStats,
  getAllShows,
  getAllBookings,
} from "../controllers/AdminController.js";

const router = express.Router();

router.get("/check-admin", checkAdmin);
router.get("/dashboard", getDashboardStats);
router.get("/shows", getAllShows);
router.get("/bookings", getAllBookings);

export default router;
