import axios from "axios";
import Movie from "../models/movie.js";
import Show from "../models/show.js";

// Get now playing movies
export const getNowPlayingMovies = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    );
    res.json({ success: true, movies: data.results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch now playing movies" });
  }
};

// Add show
export const addShow = async (req, res) => {
  try {
    const { movieId, showInput, showPrice } = req.body;

    let movie = await Movie.findById(movieId);

    if (!movie) {
      // Fetch movie details from TMDB
      const [movieDetailsRes, movieCreditsRes] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}`
        ),
      ]);

      const movieData = movieDetailsRes.data;
      const creditsData = movieCreditsRes.data;

      const movieDetails = {
        title: movieData.title,
        overview: movieData.overview,
        poster_path: movieData.poster_path,
        backdrop_path: movieData.backdrop_path,
        genres: movieData.genres,
        casts: creditsData.cast,
        release_date: movieData.release_date,
        original_language: movieData.original_language,
        tagline: movieData.tagline || "",
        vote_average: movieData.vote_average,
        runtime: movieData.runtime,
      };

      movie = await Movie.create(movieDetails);
    }

    // Create shows
    let showToCreate = [];
    showInput.forEach((show) => {
      const showDate = show.date;
      show.time.forEach((time) => {
        const dateTimeString = `${showDate}T${time}`;
        showToCreate.push({
          movie: movie._id,
          showDateTime: new Date(dateTimeString),
          showPrice,
          occupiedSeats: {},
        });
      });
    });

    if (showToCreate.length > 0) {
      await Show.insertMany(showToCreate);
    }

    res.json({ success: true, message: "Show added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add show" });
  }
};

// Get movie details
export const getMovieDetails = async (req, res) => {
  const { movieId } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
};

// Get all shows
export const getShows = async (req, res) => {
  try {
    const shows = await Show.find({
      showDateTime: { $gte: new Date() },
    }).populate("movie");
    const uniqueShows = new Set(shows.map((show) => show.movie._id.toString()));
    res.json({ success: true, shows: Array.from(uniqueShows) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch shows" });
  }
};

// Get show by ID
export const getShowById = async (req, res) => {
  try {
    const { showId } = req.params;
    const show = await Show.findById(showId).populate("movie");
    if (!show) return res.status(404).json({ error: "Show not found" });
    res.json({ success: true, show });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch show" });
  }
};

// Get show times for a movie
export const getShow = async (req, res) => {
  try {
    const { movieId } = req.params;
    const shows = await Show.find({
      movie: movieId,
      showDateTime: { $gte: new Date() },
    });

    const movie = await Movie.findById(movieId);
    const dateTime = {};

    shows.forEach((show) => {
      const date = show.showDateTime.toISOString().split("T")[0];
      if (!dateTime[date]) dateTime[date] = [];
      dateTime[date].push({ time: show.showDateTime, showId: show._id });
    });

    res.json({ success: true, movie, showTimes: dateTime });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch show times" });
  }
};
