import mongoose from "mongoose";

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    artist: {
      type: String,
    },
    album: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", SongSchema);
export default Song;
