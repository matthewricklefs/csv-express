var express = require("express");
var router = express.Router();

/**
 * What we will send from the Front End: the edited input.csv file
 * then: update the input.csv file that sits in the back end express api
 * sent: back to the Front End to be displayed through the GUI
 *
 */

router.use(express.static("public"));

// GET route
router.get("/", (req, res) => {
  res.send("API is working properly");
});

// POST route for the Table contents
router.post("/tableData", (req, res) => {
  console.log(req.body)
  res.send("I GOT IT BABY!");
})

// PUT route

// DELETE route

module.exports = router;
