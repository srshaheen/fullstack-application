import express from "express";
import {
  getMovieDetails,
  getMoviesByCategories,
  getMovieTrailers,
  getSimilarMovies,
  getTrendingMovies,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovies);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategories);

export default router;
