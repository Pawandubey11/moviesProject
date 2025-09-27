import express from "express";
import {
  getUserBookings,
  addFavoriteMovie,
  getFavoriteMovies,
} from "../controllers/userController.js";

const router = express.Router();

// Clerk middleware already protects req.auth
router.get("/bookings", getUserBookings);
router.post("/favorites", addFavoriteMovie);
router.get("/favorites", getFavoriteMovies);

export default router;
