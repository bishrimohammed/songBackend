import Song from "../model/Song.js";
import { faker } from "@faker-js/faker";
/*const sampleData = [
  {
    title: "Uncharted Dreams",
    album: "Timeless Journeys",
    artist: "Sophie Roberts",
    genre: "Pop",
  },
  {
    title: "Midnight Serenade",
    album: "Eternal Echoes",
    artist: "Lucas Mitchell",
    genre: "Jazz",
  },
  {
    title: "Whispers in the Wind",
    album: "Mystic Melodies",
    artist: "Olivia Davis",
    genre: "New Age",
  },
  {
    title: "Lost in the Stars",
    album: "Cosmic Harmony",
    artist: "Ethan Turner",
    genre: "Ambient",
  },
  {
    title: "Summer Breeze",
    album: "Sunset Serenity",
    artist: "Lily Anderson",
    genre: "Acoustic",
  },
  {
    title: "Dancing Shadows",
    album: "Nocturnal Whispers",
    artist: "Noah Wilson",
    genre: "Electronic",
  },
  {
    title: "Melodic Memories",
    album: "Retro Revival",
    artist: "Ava King",
    genre: "Synthwave",
  },
  {
    title: "Soulful Rhythm",
    album: "Groove Chronicles",
    artist: "Mia Parker",
    genre: "R&B",
  },
  {
    title: "Celestial Dreams",
    album: "Starry Nights",
    artist: "William White",
    genre: "Classical",
  },
  {
    title: "Electric Pulse",
    album: "Digital Dimensions",
    artist: "Daniel Adams",
    genre: "Electronic",
  },
  {
    title: "Summer of Love",
    album: "Vintage Vibes",
    artist: "Ella Turner",
    genre: "Pop",
  },
  {
    title: "Tranquil Waters",
    album: "Serene Seas",
    artist: "James Johnson",
    genre: "Ambient",
  },
  {
    title: "Infinite Horizons",
    album: "Epic Adventures",
    artist: "Emily Lewis",
    genre: "Orchestral",
  },
  {
    title: "City Lights",
    album: "Urban Grooves",
    artist: "Liam Harris",
    genre: "Hip Hop",
  },
  {
    title: "Mystic Mirage",
    album: "Enchanted Realms",
    artist: "Grace Allen",
    genre: "New Age",
  },
  {
    title: "Sunrise Serenade",
    album: "Morning Melodies",
    artist: "Logan Hall",
    genre: "Acoustic",
  },
  {
    title: "Lost in Time",
    album: "Timeless Tales",
    artist: "Aria Bennett",
    genre: "Folk",
  },
  {
    title: "Starry Night",
    album: "Galactic Dreams",
    artist: "Henry Turner",
    genre: "Electronic",
  },
  {
    title: "Rhythmic Reverie",
    album: "Groove Jams",
    artist: "Olivia Wilson",
    genre: "R&B",
  },
  {
    title: "Ethereal Echoes",
    album: "Heavenly Harmonies",
    artist: "Noah Robinson",
    genre: "Classical",
  },
  {
    title: "Dreamscape",
    album: "Fantasy Realms",
    artist: "Sophia Davis",
    genre: "New Age",
  },
  {
    title: "Echoes of Nature",
    album: "Natural Wonders",
    artist: "Ethan Smith",
    genre: "Ambient",
  },
  {
    title: "Neon Nights",
    album: "Synthwave Sensation",
    artist: "Ava King",
    genre: "Synthwave",
  },
  {
    title: "Smooth Groove",
    album: "Soulful Jams",
    artist: "Lucas Parker",
    genre: "R&B",
  },
  {
    title: "Moonlit Sonata",
    album: "Classical Reflections",
    artist: "Lily Johnson",
    genre: "Classical",
  },
  {
    title: "Cyber Dreams",
    album: "Digital Delights",
    artist: "Daniel Adams",
    genre: "Electronic",
  },
  {
    title: "Summer Sunshine",
    album: "Sunny Days",
    artist: "Ella Turner",
    genre: "Pop",
  },
  {
    title: "Serenade by the Sea",
    album: "Beach Breezes",
    artist: "William White",
    genre: "Acoustic",
  },
  {
    title: "Nightfall Reverie",
    album: "Twilight Tales",
    artist: "James Lewis",
    genre: "Ambient",
  },
  {
    title: "Journey to the Stars",
    album: "Cosmic Odyssey",
    artist: "Emily Smith",
    genre: "Orchestral",
  },
  {
    title: "Urban Beats",
    album: "City Grooves",
    artist: "Liam Bennett",
    genre: "Hip Hop",
  },
  {
    title: "Enchanted Oasis",
    album: "Mystical Waters",
    artist: "Grace Allen",
    genre: "New Age",
  },
  {
    title: "Morning Glow",
    album: "Dawn Serenity",
    artist: "Logan Parker",
    genre: "Acoustic",
  },
  {
    title: "Legends of Lore",
    album: "Mythical Tales",
    artist: "Aria Turner",
    genre: "Folk",
  },
  {
    title: "Stardust Symphony",
    album: "Celestial Dreams",
    artist: "Henry Davis",
    genre: "Electronic",
  },
  {
    title: "Soulful Melodies",
    album: "Soulful Serenades",
    artist: "Olivia Robinson",
    genre: "R&B",
  },
  {
    title: "Timeless Overture",
    album: "Eternal Elegance",
    artist: "Noah King",
    genre: "Classical",
  },
  {
    title: "Fantasy Voyage",
    album: "Dreamscapes",
    artist: "Sophie Smith",
    genre: "New Age",
  },
  {
    title: "Forest Whispers",
    album: "Woodland Wonders",
    artist: "Ethan Turner",
    genre: "Ambient",
  },
  {
    title: "Synthetic Dreams",
    album: "Synthwave Sensations",
    artist: "Ava Parker",
    genre: "Synthwave",
  },
  {
    title: "Groove Essentials",
    album: "Rhythmic Revival",
    artist: "Lucas Wilson",
    genre: "R&B",
  },
  {
    title: "Moonlit Reverie",
    album: "Celestial Echoes",
    artist: "Lily Robinson",
    genre: "Classical",
  },
  {
    title: "Digital Odyssey",
    album: "Electronica Escapade",
    artist: "Daniel Harris",
    genre: "Electronic",
  },
  {
    title: "Summer Vibes",
    album: "Sunny Serenades",
    artist: "Ella Adams",
    genre: "Pop",
  },
  {
    title: "Beach Dreams",
    album: "Seaside Serenades",
    artist: "William Turner",
    genre: "Acoustic",
  },
  {
    title: "Twilight Whispers",
    album: "Dusk Serenity",
    artist: "James King",
    genre: "Ambient",
  },
  {
    title: "Cosmic Odyssey",
    album: "Interstellar Journeys",
    artist: "Emily Davis",
    genre: "Orchestral",
  },
  {
    title: "City Nights",
    album: "Urban Rhythms",
    artist: "Liam Smith",
    genre: "Hip Hop",
  },
  {
    title: "Mystical Waters",
    album: "Enchanted Oceans",
    artist: "Grace Turner",
    genre: "New Age",
  },
  {
    title: "Morning Serenade",
    album: "Sunrise Melodies",
    artist: "Logan Adams",
    genre: "Acoustic",
  },
  {
    title: "Tales of Yore",
    album: "Ancient Legends",
    artist: "Aria Lewis",
    genre: "Folk",
  },
  {
    title: "Starlight Sonata",
    album: "Celestial Elegance",
    artist: "Henry Smith",
    genre: "Electronic",
  },
  {
    title: "Soulful Groove",
    album: "Soulful Chronicles",
    artist: "Olivia Harris",
    genre: "R&B",
  },
  {
    title: "Eternal Elegy",
    album: "Timeless Reflections",
    artist: "Noah Turner",
    genre: "Classical",
  },
  {
    title: "Dreamscape Chronicles",
    album: "Fantasy Fantasia",
    artist: "Sophia Turner",
    genre: "New Age",
  },
  {
    title: "Forest Echoes",
    album: "Woodland Wonders",
    artist: "Ethan Harris",
    genre: "Ambient",
  },
  {
    title: "Synthetic Serenity",
    album: "Synthwave Dreams",
    artist: "Ava Davis",
    genre: "Synthwave",
  },
  {
    title: "Rhythm & Blues",
    album: "Soulful Harmonies",
    artist: "Lucas Turner",
    genre: "R&B",
  },
  {
    title: "Nocturnal Reverie",
    album: "Moonlit Musings",
    artist: "Lily Harris",
    genre: "Classical",
  },
  {
    title: "Digital Dreamscape",
    album: "Electronica Odyssey",
    artist: "Daniel Turner",
    genre: "Electronic",
  },
  {
    title: "Summer Serenades",
    album: "Sunny Days",
    artist: "Ella Robinson",
    genre: "Pop",
  },
  {
    title: "Seaside Serenades",
    album: "Beachside Bliss",
    artist: "William Harris",
    genre: "Acoustic",
  },
  {
    title: "Dusk Serenity",
    album: "Twilight Whispers",
    artist: "James Davis",
    genre: "Ambient",
  },
  {
    title: "Interstellar Journeys",
    album: "Cosmic Odyssey",
    artist: "Emily Turner",
    genre: "Orchestral",
  },
  {
    title: "Urban Rhythms",
    album: "City Nights",
    artist: "Liam Turner",
    genre: "Hip Hop",
  },
  {
    title: "Enchanted Oceans",
    album: "Mystical Waters",
    artist: "Grace Harris",
    genre: "New Age",
  },
  {
    title: "Sunrise Melodies",
    album: "Morning Serenade",
    artist: "Logan Harris",
    genre: "Acoustic",
  },
  {
    title: "Ancient Legends",
    album: "Tales of Yore",
    artist: "Aria Harris",
    genre: "Folk",
  },
  {
    title: "Celestial Elegance",
    album: "Starlight Sonata",
    artist: "Henry Turner",
    genre: "Electronic",
  },
  {
    title: "Soulful Chronicles",
    album: "Soulful Groove",
    artist: "Olivia Davis",
    genre: "R&B",
  },
  {
    title: "Timeless Reflections",
    album: "Eternal Elegy",
    artist: "Noah Turner",
    genre: "Classical",
  },
  {
    title: "Fantasy Fantasia",
    album: "Dreamscape Chronicles",
    artist: "Sophia Turner",
    genre: "New Age",
  },
  {
    title: "Woodland Wonders",
    album: "Forest Echoes",
    artist: "Ethan Harris",
    genre: "Ambient",
  },
  {
    title: "Synthwave Dreams",
    album: "Synthetic Serenity",
    artist: "Ava Davis",
    genre: "Synthwave",
  },
  {
    title: "Soulful Harmonies",
    album: "Rhythm & Blues",
    artist: "Lucas Turner",
    genre: "R&B",
  },
  {
    title: "Moonlit Musings",
    album: "Nocturnal Reverie",
    artist: "Lily Harris",
    genre: "Classical",
  },
  {
    title: "Electronica Odyssey",
    album: "Digital Dreamscape",
    artist: "Daniel Turner",
    genre: "Electronic",
  },
  {
    title: "Sunny Days",
    album: "Summer Serenades",
    artist: "Ella Robinson",
    genre: "Pop",
  },
  {
    title: "Beachside Bliss",
    album: "Seaside Serenades",
    artist: "William Harris",
    genre: "Acoustic",
  },
  {
    title: "Twilight Whispers",
    album: "Dusk Serenity",
    artist: "James Davis",
    genre: "Ambient",
  },
  {
    title: "Cosmic Odyssey",
    album: "Interstellar Journeys",
    artist: "Emily Turner",
    genre: "Orchestral",
  },
  {
    title: "City Nights",
    album: "Urban Rhythms",
    artist: "Liam Turner",
    genre: "Hip Hop",
  },
  {
    title: "Mystical Waters",
    album: "Enchanted Oceans",
    artist: "Grace Harris",
    genre: "New Age",
  },
  {
    title: "Morning Serenade",
    album: "Sunrise Melodies",
    artist: "Logan Harris",
    genre: "Acoustic",
  },
  {
    title: "Tales of Yore",
    album: "Ancient Legends",
    artist: "Aria Harris",
    genre: "Folk",
  },
  {
    title: "Starlight Sonata",
    album: "Celestial Elegance",
    artist: "Henry Turner",
    genre: "Electronic",
  },
  {
    title: "Soulful Chronicles",
    album: "Soulful Groove",
    artist: "Olivia Davis",
    genre: "R&B",
  },
  {
    title: "Timeless Reflections",
    album: "Eternal Elegy",
    artist: "Noah Turner",
    genre: "Classical",
  },
  {
    title: "Fantasy Fantasia",
    album: "Dreamscape Chronicles",
    artist: "Sophia Turner",
    genre: "New Age",
  },
  {
    title: "Woodland Wonders",
    album: "Forest Echoes",
    artist: "Ethan Harris",
    genre: "Ambient",
  },
  {
    title: "Synthwave Dreams",
    album: "Synthetic Serenity",
    artist: "Ava Davis",
    genre: "Synthwave",
  },
  {
    title: "Soulful Harmonies",
    album: "Rhythm & Blues",
    artist: "Lucas Turner",
    genre: "R&B",
  },
  {
    title: "Moonlit Musings",
    album: "Nocturnal Reverie",
    artist: "Lily Harris",
    genre: "Classical",
  },
  {
    title: "Electronica Odyssey",
    album: "Digital Dreamscape",
    artist: "Daniel Turner",
    genre: "Electronic",
  },
  {
    title: "Sunny Days",
    album: "Summer Serenades",
    artist: "Ella Robinson",
    genre: "Pop",
  },
  {
    title: "Beachside Bliss",
    album: "Seaside Serenades",
    artist: "William Harris",
    genre: "Acoustic",
  },
  {
    title: "Twilight Whispers",
    album: "Dusk Serenity",
    artist: "James Davis",
    genre: "Ambient",
  },
  {
    title: "Cosmic Odyssey",
    album: "Interstellar Journeys",
    artist: "Emily Turner",
    genre: "Orchestral",
  },
  {
    title: "City Nights",
    album: "Urban Rhythms",
    artist: "Liam Turner",
    genre: "Hip Hop",
  },
  {
    title: "Mystical Waters",
    album: "Enchanted Oceans",
    artist: "Grace Harris",
    genre: "New Age",
  },
  {
    title: "Morning Serenade",
    album: "Sunrise Melodies",
    artist: "Logan Harris",
    genre: "Acoustic",
  },
  {
    title: "Tales of Yore",
    album: "Ancient Legends",
    artist: "Aria Harris",
    genre: "Folk",
  },
  {
    title: "Starlight Sonata",
    album: "Celestial Elegance",
    artist: "Henry Turner",
    genre: "Electronic",
  },
  {
    title: "Soulful Chronicles",
    album: "Soulful Groove",
    artist: "Olivia Davis",
    genre: "R&B",
  },
  {
    title: "Timeless Reflections",
    album: "Eternal Elegy",
    artist: "Noah Turner",
    genre: "Classical",
  },
  {
    title: "Fantasy Fantasia",
    album: "Dreamscape Chronicles",
    artist: "Sophia Turner",
    genre: "New Age",
  },
  {
    title: "Woodland Wonders",
    album: "Forest Echoes",
    artist: "Ethan Harris",
    genre: "Ambient",
  },
  {
    title: "Synthwave Dreams",
    album: "Synthetic Serenity",
    artist: "Ava Davis",
    genre: "Synthwave",
  },
  {
    title: "Soulful Harmonies",
    album: "Rhythm & Blues",
    artist: "Lucas Turner",
    genre: "R&B",
  },
  {
    title: "Moonlit Musings",
    album: "Nocturnal Reverie",
    artist: "Lily Harris",
    genre: "Classical",
  },
  {
    title: "Electronica Odyssey",
    album: "Digital Dreamscape",
    artist: "Daniel Turner",
    genre: "Electronic",
  },
  {
    title: "Sunny Days",
    album: "Summer Serenades",
    artist: "Ella Robinson",
    genre: "Pop",
  },
  {
    title: "Beachside Bliss",
    album: "Seaside Serenades",
    artist: "William Harris",
    genre: "Acoustic",
  },
  {
    title: "Twilight Whispers",
    album: "Dusk Serenity",
    artist: "James Davis",
    genre: "Ambient",
  },
  {
    title: "Cosmic Odyssey",
    album: "Interstellar Journeys",
    artist: "Emily Turner",
    genre: "Orchestral",
  },
  {
    title: "City Nights",
    album: "Urban Rhythms",
    artist: "Liam Turner",
    genre: "Hip Hop",
  },
  {
    title: "Mystical Waters",
    album: "Enchanted Oceans",
    artist: "Grace Harris",
    genre: "New Age",
  },
  {
    title: "Morning Serenade",
    album: "Sunrise Melodies",
    artist: "Logan Harris",
    genre: "Acoustic",
  },
  {
    title: "Tales of Yore",
    album: "Ancient Legends",
    artist: "Aria Harris",
    genre: "Folk",
  },
  {
    title: "Starlight Sonata",
    album: "Celestial Elegance",
    artist: "Henry Turner",
    genre: "Electronic",
  },
  {
    title: "Soulful Chronicles",
    album: "Soulful Groove",
    artist: "Olivia Davis",
    genre: "R&B",
  },
  {
    title: "Timeless Reflections",
    album: "Eternal Elegy",
    artist: "Noah Turner",
    genre: "Classical",
  },
  {
    title: "Fantasy Fantasia",
    album: "Dreamscape Chronicles",
    artist: "Sophia Turner",
    genre: "New Age",
  },
  {
    title: "Woodland Wonders",
    album: "Forest Echoes",
    artist: "Ethan Harris",
    genre: "Ambient",
  },
  {
    title: "Synthwave Dreams",
    album: "Synthetic Serenity",
    artist: "Ava Davis",
    genre: "Synthwave",
  },
  {
    title: "Soulful Harmonies",
    album: "Rhythm & Blues",
    artist: "Lucas Turner",
    genre: "R&B",
  },
  {
    title: "Moonlit Musings",
    album: "Nocturnal Reverie",
    artist: "Lily Harris",
    genre: "Classical",
  },
  {
    title: "Electronica Odyssey",
    album: "Digital Dreamscape",
    artist: "Daniel Turner",
    genre: "Electronic",
  },
  {
    title: "Sunny Days",
    album: "Summer Serenades",
    artist: "Ella Robinson",
    genre: "Pop",
  },
  {
    title: "Beachside Bliss",
    album: "Seaside Serenades",
    artist: "William Harris",
    genre: "Acoustic",
  },
  {
    title: "Twilight Whispers",
    album: "Dusk Serenity",
    artist: "James Davis",
    genre: "Ambient",
  },
  {
    title: "Cosmic Odyssey",
    album: "Interstellar Journeys",
    artist: "Emily Turner",
    genre: "Orchestral",
  },
  {
    title: "City Nights",
    album: "Urban Rhythms",
    artist: "Liam Turner",
    genre: "Hip Hop",
  },
  {
    title: "Mystical Waters",
    album: "Enchanted Oceans",
    artist: "Grace Harris",
    genre: "New Age",
  },
  {
    title: "Morning Serenade",
    album: "Sunrise Melodies",
    artist: "Logan Harris",
    genre: "Acoustic",
  },
  {
    title: "Tales of Yore",
    album: "Ancient Legends",
    artist: "Aria Harris",
    genre: "Folk",
  },
  {
    title: "Starlight Sonata",
    album: "Celestial Elegance",
    artist: "Henry Turner",
    genre: "Electronic",
  },
  {
    title: "Soulful Chronicles",
    album: "Soulful Groove",
    artist: "Olivia Davis",
    genre: "R&B",
  },
  {
    title: "Timeless Reflections",
    album: "Eternal Elegy",
    artist: "Noah Turner",
    genre: "Classical",
  },
];*/

export const createSong = async (req, res) => {
  console.log(req.body);
  const songs = new Song({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
  });
  const SongsData = await songs.save();

  res.status(200).json(SongsData);
};

export const getSongs = async (req, res) => {
  const Songdata = await Song.find()
    .sort({ createdAt: -1 })
    .select({ title: 1, artist: 1, genre: 1, album: 1 });
  //console.log(Songdata);
  res.status(200).json(Songdata);
};
export const FilterSongs = async (req, res) => {
  const query = req.query;
  const data = await Song.find({
    artist: query.artist ? query.artist : /.*/,
    album: query.album ? query.album : /.*/,
    genre: query.genre ? query.genre : /.*/,
  });
  if (data.length === 0) {
    res.status(404).json({ err: "not found" });
  } else {
    //console.log(data);
    res.status(200).json(data);
  }
};

export const updateSong = async (req, res) => {
  try {
    const result = await Song.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          title: req.body.title,
          artist: req.body.artist,
          album: req.body.album,
          genre: req.body.genre,
        },
      },
      { new: true }
    );
    res.status(200).json({ result, succes: "successfully updated" });
  } catch (error) {
    res.status(300).json({ err: "something went wrong" });
  }
};

export const deleteSong = async (req, res) => {
  // console.log(req.body._id);
  try {
    //const d = await Song.deleteMany({ title: "harmee" });

    const result = await Song.findByIdAndDelete(
      { _id: req.body._id },
      { new: true }
    );

    if (result.errors) {
      res.status(300).json({ err: "something 1 went wrong" });
    } else res.status(200).json({ result, succes: "successfully deleted" });

    // console.log(d);
  } catch (error) {
    res.status(300).json({ err: "something went wrong" });
  }
};

export const songStatistics = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const genres = await Song.distinct("genre");
    const artists = await Song.distinct("artist");
    const album = await Song.distinct("album");

    const Allstatistics = {
      totalSongs,
      totalGenres: genres.length,
      totalArtists: artists.length,
      totalAlbum: album.length,
    };
    const Number_of_Song_genreStatistics = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);
    //number of songs & albums each artist has
    const Number_song_and_albumartistStatistics = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          totalSongs: { $sum: 1 },
          uniqueAlbums: { $addToSet: "$album" },
        },
      },
      {
        $project: {
          _id: 1,
          totalSongs: 1,
          totalAlbums: { $size: "$uniqueAlbums" },
        },
      },
    ]);

    //number  songs in each album
    const Number_songs_albumStatistics = await Song.aggregate([
      {
        $group: {
          _id: "$album",
          totalSongs: { $sum: 1 },
        },
      },
    ]);
    res.json({
      Allstatistics,
      Number_of_Song_genreStatistics,
      Number_song_and_albumartistStatistics,
      Number_songs_albumStatistics,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const generateRandomSong = async () => {
  const sampleData = [];

  // Generate 100 sample records
  for (let i = 1; i <= 100; i++) {
    const artist = faker.person.fullName();
    const numAlbums = Math.floor(Math.random() * 5) + 1; // Random number of albums between 1 and 5

    for (let j = 1; j <= numAlbums; j++) {
      const album = faker.lorem.words(2); // Generate a random album name with two words

      // Randomly select a genre

      // Generate a random number of songs between 6 and 12
      const numSongs = Math.floor(Math.random() * 7) + 6;

      for (let k = 1; k <= numSongs; k++) {
        const genre = faker.music.genre();
        const title = faker.music.songName(); // Generate a random song title with three words
        sampleData.push({ title, album, artist, genre });
      }
    }
  }

  // Return the generated data as an array
  //console.log(sampleData);

  Song.insertMany(sampleData)
    .then(() => {
      console.log("Sample data inserted successfully.");

      // Retrieve the inserted data from the database and return it
      Song.find({}, (err, data) => {
        if (err) {
          console.error("Error retrieving data:", err);
        } else {
          console.log("Sample data retrieved successfully.");
          console.log(data); // Return the data as an array
          res.status(200).json(data);
        }

        mongoose.connection.close(); // Close the connection when done.
      });
    })
    .catch((error) => {
      console.error("Error inserting sample data:", error);
    });
};
