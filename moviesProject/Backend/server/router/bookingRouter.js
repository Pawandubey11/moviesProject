import express from "express";
import checkSeatsAvailabilityAndBook from "../controllers/bookingController.js";
import { getOccupiedSeats } from "../controllers/bookingController.js";

const router = express.Router();

// POST → Book seats (transaction safe)
router.post("/book", async (req, res) => {
  try {
    const { showId, selectedSeats, userId } = req.body;

    const result = await checkSeatsAvailabilityAndBook(
      showId,
      selectedSeats,
      userId
    );

    if (!result.success) {
      return res.status(400).json(result);
    }

    return res.status(201).json(result);
  } catch (error) {
    console.error("Error in booking route:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// GET → Fetch occupied seats for a show
router.get("/occupied/:showId", getOccupiedSeats);

export default router;
