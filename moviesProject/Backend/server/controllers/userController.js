import Booking from "../models/booking.js";
import Movie from "../models/Movie.js";
import { clerkClient } from "@clerk/clerk-sdk-node"; // Clerk SDK

// ✅ Get all bookings for a logged-in user
export const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.auth; // Clerk attaches userId to req.auth

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const bookings = await Booking.find({ user: userId })
      .populate("show")
      .populate({
        path: "show",
        populate: { path: "movie" }, // populate movie inside show
      });

    res.json({ success: true, bookings });
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Add favorite movies to Clerk user metadata
export const addFavoriteMovie = async (req, res) => {
  try {
    const { userId } = req.auth;
    const { movieId } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }

    // Update Clerk user metadata
    const user = await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: {
        favorites: [
          ...(req.auth.sessionClaims.privateMetadata?.favorites || []),
          movieId,
        ],
      },
    });

    res.json({
      success: true,
      message: "Movie added to favorites",
      favorites: user.privateMetadata.favorites,
    });
  } catch (error) {
    console.error("Error adding favorite movie:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Get favorite movies (from DB using Clerk metadata)
export const getFavoriteMovies = async (req, res) => {
  try {
    const { userId, sessionClaims } = req.auth;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const favoriteIds = sessionClaims.privateMetadata?.favorites || [];
    const favoriteMovies = await Movie.find({ _id: { $in: favoriteIds } });

    res.json({ success: true, favorites: favoriteMovies });
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
