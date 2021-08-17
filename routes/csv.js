import express from "express";
import CSV from "../libCSV/CSV.mjs";
import Row from "../libCSV/Row.mjs";
const router = express.Router();

// GET
router.get("/", (req, res) => {
  var myCsv = new CSV("input.csv");
  res.send(JSON.stringify(myCsv));
});

// POST - Insert Row ( at end of document)
router.post("/", (req, res) => {
  var myCsv = new CSV("input.csv");

  myCsv.appendRow();

  return res.status(200).send("Row Inserted");
});

// DELETE - Remove Row
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  let myCsv = new CSV("input.csv");

  myCsv.rows.splice(id, 1);

  // const deleted = myCsv.findCell((row) => row.id == id);

  // if (deleted) {
  //   myCsv = myCsv.filter((row) => row.id != id);
  // } else {
  //   res.status(404).json({ message: "cannot find the row ID" });
  // }

  console.log("server side ID: ", id);

  myCsv.writeCSVFile("input.csv");
});

// conditionally check that we are maintaining data persistence for the Zero Index...

// PUT - Update Cell
router.put("/:id", (req, res) => {
  console.log(req.body);

  var myCsv = new CSV("input.csv");

  var cell = myCsv.findCell(req.body.rowId, req.body.datumId);

  cell.setValue(req.body.datum);

  myCsv.writeCSVFile("input.csv");

  return res.status(200).send("Row Updated");
});

module.exports = router;
