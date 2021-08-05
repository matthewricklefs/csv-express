import express from "express";
import CSV from "../libCSV/CSV.mjs";
const router = express.Router();

// GET
router.get("/", (req, res) => {
  var myCsv = new CSV("input.csv");
  res.send(JSON.stringify(myCsv));
});

// POST - Insert Row
router.post("/insert", (req, res) => {
  addRow();

  return res.status(200).send("Row Inserted");
});

// DELETE - Remove Row
router.delete("/:id", (req, res) => {
  var row = req.params.id;

  row = row.filter((x) => x.rowId != req.params.id);

  return res.status(200).send("Row Deleted");
});

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
