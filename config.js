export const api = process.env.REACT_APP_API;
export const base_img_path = "https://image.tmdb.org/t/p/original/";
export const base_url = "https://api.themoviedb.org/3";

// https://api.themoviedb.org/3${config[fetchTrending]?.url || config.fetchTrending.url}

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${api}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${api}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${api}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${api}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${api}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${api}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${api}&with_genres=9648`,
  },
  fetchScifiMovies: {
    title: "Scifi",
    url: `/discover/movie?api_key=${api}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${api}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${api}&with_genres=16`,
  },
  fetchTv: {
    title: "Tv Movie",
    url: `/discover/movie?api_key=${api}&with_genres=10770`,
  },
};
