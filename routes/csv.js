import express from 'express';
import CSV from '../libCSV/CSV.mjs';
const router = express.Router();

// GET
router.get("/", (req, res) => {
  //let data = {};

  var myCsv = new CSV("input.csv");

  res.send(JSON.stringify(myCsv));
});

module.exports = router;