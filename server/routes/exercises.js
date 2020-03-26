const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((_req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const count = Number(req.body.count);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    count,
    date
  });

  newExercise
    .save()
    .then(() => res.json("Exercise Added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
