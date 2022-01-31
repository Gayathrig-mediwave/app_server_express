const express = require("express");
const cors = require("cors");

const port = 8080;
const app = express();
const db = require("./db");
app.use(cors());
app.use(express.json());

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    console.log(`cannot run on${port}`);
    PromiseRejectionEvent.exit(1);
  }
  console.log(`server running on port${port}`);
});
//empty page
app.get("/", (req, res) => {
  return res.send("hello");
});
//show all movies
app.get("/movies", (req, res) => {
  const movies = db.movies;
  return res.send(movies);
});
//show one movie
app.get("/movies/:id", (req, res) => {
  //console.log("params:", req.params.id);
  //return res.send(db.movies);
  const movieId = req.params.id;
  //const movie = db.movies.find((m) => m.id == movieId);
  const movie = db.getOneMovie(movieId);
  if (!movie) {
    return res.status(404).send({
      message: `movie ${movieId}not found`,
    });
  }
  return res.send(movie);
});
//add a movie
app.post("/movies", (req, res) => {
  const movie = db.addMovie(req.body);
  return res.send(movie);
});
//delete a movie
app.delete("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = db.deleteMovie(movieId);
  return res.send({
    message: "movie is deleted",
  });
});
//update a movie
app.put("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = db.updateMovie(movieId, req.body);
  return res.send(movie);
});
