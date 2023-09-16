import express from "express";
import {
  createSong,
  getSongs,
  FilterSongs,
  updateSong,
  deleteSong,
  songStatistics,
  generateRandomSong,
} from "../controller/song.js";
const router = express.Router();

router.get("/", getSongs);
router.get("/query", FilterSongs);
router.post("/", createSong);
router.patch("/", updateSong);
router.delete("/", deleteSong);
router.get("/statistics", songStatistics);
router.get("/generate", generateRandomSong);
export default router;
