// import React from "react";
// import MovieCard from "./MovieCard";

// const NowShowing = () => {
//   const demoMovies = [
//     {
//       id: 1,
//       title: "The Batman",
//       poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
//       year: "2022",
//       genres: ["Action", "Crime", "Drama"],
//       runtime: 176,
//       rating: 7.8,
//     },
//     {
//       id: 2,
//       title: "Avengers: Endgame",
//       poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//       year: "2019",
//       genres: ["Action", "Adventure", "Sci-Fi"],
//       runtime: 181,
//       rating: 8.4,
//     },
//     {
//       id: 3,
//       title: "Spider-Man: No Way Home",
//       poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
//       year: "2021",
//       genres: ["Action", "Adventure", "Fantasy"],
//       runtime: 148,
//       rating: 8.2,
//     },
//     {
//       id: 4,
//       title: "Inception",
//       poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
//       year: "2010",
//       genres: ["Action", "Sci-Fi", "Thriller"],
//       runtime: 148,
//       rating: 8.8,
//     },
//     {
//       id: 5,
//       title: "Interstellar",
//       poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
//       year: "2014",
//       genres: ["Adventure", "Drama", "Sci-Fi"],
//       runtime: 169,
//       rating: 8.6,
//     },
//     {
//       id: 6,
//       title: "The Dark Knight",
//       poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//       year: "2008",
//       genres: ["Action", "Crime", "Drama"],
//       runtime: 152,
//       rating: 9.0,
//     },
//     {
//       id: 7,
//       title: "Black Panther: Wakanda Forever",
//       poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
//       year: "2022",
//       genres: ["Action", "Adventure"],
//       runtime: 161,
//       rating: 7.2,
//     },
//     {
//       id: 8,
//       title: "Doctor Strange: Multiverse of Madness",
//       poster: "https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
//       year: "2022",
//       genres: ["Action", "Fantasy", "Horror"],
//       runtime: 126,
//       rating: 7.0,
//     },
//     {
//       id: 9,
//       title: "Guardians of the Galaxy Vol. 3",
//       poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
//       year: "2023",
//       genres: ["Action", "Adventure", "Comedy"],
//       runtime: 150,
//       rating: 8.0,
//     },
//     {
//       id: 10,
//       title: "Avatar: The Way of Water",
//       poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//       year: "2022",
//       genres: ["Sci-Fi", "Adventure"],
//       runtime: 192,
//       rating: 7.7,
//     },
//     {
//       id: 11,
//       title: "Iron Man",
//       poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
//       year: "2008",
//       genres: ["Action", "Sci-Fi"],
//       runtime: 126,
//       rating: 7.9,
//     },
//     {
//       id: 12,
//       title: "Captain America: Civil War",
//       poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
//       year: "2016",
//       genres: ["Action", "Adventure"],
//       runtime: 147,
//       rating: 7.8,
//     },
//     {
//       id: 13,
//       title: "Thor: Ragnarok",
//       poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
//       year: "2017",
//       genres: ["Action", "Comedy", "Fantasy"],
//       runtime: 130,
//       rating: 7.9,
//     },
//     {
//       id: 14,
//       title: "Shang-Chi and the Legend of the Ten Rings",
//       poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
//       year: "2021",
//       genres: ["Action", "Adventure", "Fantasy"],
//       runtime: 132,
//       rating: 7.6,
//     },
//     {
//       id: 15,
//       title: "Eternals",
//       poster: "https://image.tmdb.org/t/p/w500/b6qUu00iIIkXX13szFy7d0CyNcg.jpg",
//       year: "2021",
//       genres: ["Action", "Fantasy", "Sci-Fi"],
//       runtime: 157,
//       rating: 6.8,
//     },
//     {
//       id: 16,
//       title: "Ant-Man and the Wasp: Quantumania",
//       poster: "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
//       year: "2023",
//       genres: ["Action", "Sci-Fi"],
//       runtime: 125,
//       rating: 6.5,
//     },
//     {
//       id: 17,
//       title: "Deadpool",
//       poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
//       year: "2016",
//       genres: ["Action", "Comedy"],
//       runtime: 108,
//       rating: 8.0,
//     },
//     {
//       id: 18,
//       title: "Joker",
//       poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//       year: "2019",
//       genres: ["Crime", "Drama", "Thriller"],
//       runtime: 122,
//       rating: 8.5,
//     },
//     {
//       id: 19,
//       title: "Frozen II",
//       poster: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
//       year: "2019",
//       genres: ["Animation", "Family"],
//       runtime: 103,
//       rating: 7.2,
//     },
//     {
//       id: 20,
//       title: "Minions: The Rise of Gru",
//       poster: "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
//       year: "2022",
//       genres: ["Animation", "Comedy", "Family"],
//       runtime: 87,
//       rating: 7.1,
//     },
//   ];

//   return (
//     <section className="py-10 px-5">
//       <h2 className="text-2xl font-bold text-white mb-6">🎬 Now Showing</h2>
//       <div className="flex flex-wrap justify-center">
//         {demoMovies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NowShowing;





















































import React from "react";
import MovieCard from "./MovieCard";

// ✅ Exported so MovieDetails can import the same list
export const demoMovies = [
  {
    id: 1,
    title: "The Batman",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    year: "2022",
    genres: ["Action", "Crime", "Drama"],
    runtime: 176,
    rating: 7.8,
    overview:
      "Batman ventures into Gotham's underworld when a sadistic killer leaves a trail of cryptic clues.",
    release_date: "2022-03-04",
    vote_average: 7.8,
    vote_count: 3500,
  },
  {
    id: 2,
    title: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    year: "2019",
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 181,
    rating: 8.4,
    overview:
      "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    release_date: "2019-04-26",
    vote_average: 8.4,
    vote_count: 12000,
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    year: "2021",
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 148,
    rating: 8.2,
    overview:
      "Peter Parker's identity is revealed, leading him to seek Doctor Strange's help to restore his secret.",
    release_date: "2021-12-17",
    vote_average: 8.2,
    vote_count: 9500,
  },
  {
    id: 4,
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    year: "2010",
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: 148,
    rating: 8.8,
    overview:
      "A skilled thief is given a chance at redemption if he can successfully perform inception on a target's mind.",
    release_date: "2010-07-16",
    vote_average: 8.8,
    vote_count: 21000,
  },
  {
    id: 5,
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    year: "2014",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    rating: 8.6,
    overview:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    release_date: "2014-11-07",
    vote_average: 8.6,
    vote_count: 17000,
  },
  {
    id: 6,
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    year: "2008",
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    rating: 9.0,
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy.",
    release_date: "2008-07-18",
    vote_average: 9.0,
    vote_count: 24000,
  },
  {
    id: 7,
    title: "Black Panther: Wakanda Forever",
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    year: "2022",
    genres: ["Action", "Adventure"],
    runtime: 161,
    rating: 7.2,
    overview:
      "The leaders of Wakanda fight to protect their nation after the death of King T'Challa.",
    release_date: "2022-11-11",
    vote_average: 7.2,
    vote_count: 4200,
  },
  {
    id: 8,
    title: "Doctor Strange: Multiverse of Madness",
    poster: "https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
    year: "2022",
    genres: ["Action", "Fantasy", "Horror"],
    runtime: 126,
    rating: 7.0,
    overview:
      "Doctor Strange traverses the multiverse to protect reality from a powerful new threat.",
    release_date: "2022-05-06",
    vote_average: 7.0,
    vote_count: 5000,
  },
  {
    id: 9,
    title: "Guardians of the Galaxy Vol. 3",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    year: "2023",
    genres: ["Action", "Adventure", "Comedy"],
    runtime: 150,
    rating: 8.0,
    overview:
      "The Guardians embark on a mission to protect Rocket from his creator while facing their own challenges.",
    release_date: "2023-05-05",
    vote_average: 8.0,
    vote_count: 4100,
  },
  {
    id: 10,
    title: "Avatar: The Way of Water",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    year: "2022",
    genres: ["Sci-Fi", "Adventure"],
    runtime: 192,
    rating: 7.7,
    overview:
      "Jake Sully and Neytiri raise a family on Pandora while facing a renewed threat from humans.",
    release_date: "2022-12-16",
    vote_average: 7.7,
    vote_count: 6000,
  },
  {
    id: 11,
    title: "Iron Man",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    year: "2008",
    genres: ["Action", "Sci-Fi"],
    runtime: 126,
    rating: 7.9,
    overview:
      "After being held captive, billionaire engineer Tony Stark creates a high-tech suit of armor to escape.",
    release_date: "2008-05-02",
    vote_average: 7.9,
    vote_count: 9000,
  },
  {
    id: 12,
    title: "Captain America: Civil War",
    poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    year: "2016",
    genres: ["Action", "Adventure"],
    runtime: 147,
    rating: 7.8,
    overview:
      "Political pressure divides the Avengers into opposing factions led by Captain America and Iron Man.",
    release_date: "2016-05-06",
    vote_average: 7.8,
    vote_count: 8200,
  },
  {
    id: 13,
    title: "Thor: Ragnarok",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    year: "2017",
    genres: ["Action", "Comedy", "Fantasy"],
    runtime: 130,
    rating: 7.9,
    overview:
      "Thor must escape the alien planet Sakaar in time to save Asgard from Hela and the coming of Ragnarok.",
    release_date: "2017-11-03",
    vote_average: 7.9,
    vote_count: 7000,
  },
  {
    id: 14,
    title: "Shang-Chi and the Legend of the Ten Rings",
    poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    year: "2021",
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: 132,
    rating: 7.6,
    overview:
      "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the Ten Rings.",
    release_date: "2021-09-03",
    vote_average: 7.6,
    vote_count: 4800,
  },
  {
    id: 15,
    title: "Eternals",
    poster: "https://image.tmdb.org/t/p/w500/b6qUu00iIIkXX13szFy7d0CyNcg.jpg",
    year: "2021",
    genres: ["Action", "Fantasy", "Sci-Fi"],
    runtime: 157,
    rating: 6.8,
    overview:
      "The Eternals, an immortal alien race, emerge to protect humanity from their ancient counterparts, the Deviants.",
    release_date: "2021-11-05",
    vote_average: 6.8,
    vote_count: 3500,
  },
  {
    id: 16,
    title: "Ant-Man and the Wasp: Quantumania",
    poster: "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    year: "2023",
    genres: ["Action", "Sci-Fi"],
    runtime: 125,
    rating: 6.5,
    overview:
      "Scott Lang and Hope van Dyne explore the Quantum Realm, encountering strange creatures and Kang the Conqueror.",
    release_date: "2023-02-17",
    vote_average: 6.5,
    vote_count: 3000,
  },
  {
    id: 17,
    title: "Deadpool",
    poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
    year: "2016",
    genres: ["Action", "Comedy"],
    runtime: 108,
    rating: 8.0,
    overview:
      "A former Special Forces operative turns mercenary and becomes the antihero Deadpool.",
    release_date: "2016-02-12",
    vote_average: 8.0,
    vote_count: 8000,
  },
  {
    id: 18,
    title: "Joker",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    year: "2019",
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 122,
    rating: 8.5,
    overview:
      "Arthur Fleck, a failed comedian, descends into madness and becomes the iconic criminal known as the Joker.",
    release_date: "2019-10-04",
    vote_average: 8.5,
    vote_count: 10000,
  },
  {
    id: 19,
    title: "Frozen II",
    poster: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
    year: "2019",
    genres: ["Animation", "Family"],
    runtime: 103,
    rating: 7.2,
    overview:
      "Elsa sets out to discover the origin of her powers and save Arendelle from a mysterious threat.",
    release_date: "2019-11-22",
    vote_average: 7.2,
    vote_count: 5000,
  },
  {
    id: 20,
    title: "Minions: The Rise of Gru",
    poster: "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    year: "2022",
    genres: ["Animation", "Comedy", "Family"],
    runtime: 87,
    rating: 7.1,
    overview:
      "A young Gru tries to join the supervillain group Vicious 6, with help from his loyal Minions.",
    release_date: "2022-07-01",
    vote_average: 7.1,
    vote_count: 2500,
  },
];

const NowShowing = () => {
  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-bold text-white mb-6">🎬 Now Showing</h2>
      <div className="flex flex-wrap justify-center">
        {demoMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default NowShowing;
