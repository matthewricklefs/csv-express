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
  data.splice(0, 0, req.body.value);
  return res.status(200).send("Row Inserted");
});

// DELETE - Remove Row
router.delete("/:id", (req, res) => {
  data = data.filter((x) => x.OrderID != req.params.id);
  return res.status(200).send("Row Deleted");
});

// PUT - Update Row
router.put("/:id", (req, res) => {
  var index = data.findIndex((x) => x.OrderID === req.body.value.OrderID);
  data.splice(index, 1, req.body.value);
  return res.status(200).send("Row Updated");
});

module.exports = router;
