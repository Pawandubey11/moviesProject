import express from "express";
import { protectAdmin } from "../Middleware/auth.js";

import {
  getNowPlayingMovies,
  getMovieDetails,
  addShow,
  getShowById,
  getShows, // Make sure getShows exists in your controller
} from "../controllers/showController.js";

const showRouter = express.Router();

showRouter.get("/now-playing", protectAdmin, getNowPlayingMovies);
showRouter.get("/movie/:movieId", getMovieDetails);
showRouter.post("/add", protectAdmin, addShow);
showRouter.get("/all", getShows);
showRouter.get("/:movieId", getShowById);

showRouter.get("/ping", (req, res) => {
  res.json({ msg: "✅ shows router is working" });
});

export default showRouter;
