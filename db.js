const movies = [
  {
    id: 1643102154540,
    name: "Tangled",
  },
  {
    id: 1643102154541,
    name: "The Princess",
  },
];
const getOneMovie = (movieId) => {
  const movie = movies.find((m) => m.id == movieId);
  return movie;
};

const addMovie = (payload) => {
  const movie = {
    id: new Date().getTime(),
    name: payload.name,
  };
  movies.push(movie);
  return movie;
};

const deleteMovie = (movieId) => {
  const movieIndex = movies.findIndex((m) => m.id == movieId);
  if (movieIndex != -1) {
    movies.splice(movieIndex, 1);
  } else {
    console.log(`movie id ${moviId} cannot be deleted`);
  }
};

const updateMovie = (movieId, payload) => {
  const movieIndex = movies.findIndex((m) => m.id == movieId);
  if (movieIndex != -1) {
    movies[movieIndex]["name"] = payload.name;
  } else {
    console.log(`movie id ${moviId} cannot be updated`);
  }
};
module.exports = {
  movies,
  getOneMovie,
  addMovie,
  deleteMovie,
  updateMovie,
};
