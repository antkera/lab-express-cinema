const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// lista de peliculas

router.get("/movies", (req, res, next) => {
  Movie.find()
    .select({ title: 1, image: 1 })
    .then((response) => {
      console.log(response);

      res.render("movies/movies.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });
});

//peliculas por id

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
  .then((response) => {
    console.log(response)
    res.render("movies/moviesById.hbs", response )
  })
  .catch((err) => {next(err)}
)});

module.exports = router;
