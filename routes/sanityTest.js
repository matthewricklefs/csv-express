import express from 'express';
const router = express.Router();

// GET
router.get("/", (req, res) => {
  res.send("You are not insane");
});

module.exports = router;