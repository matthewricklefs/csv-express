import express from "express";
import cors from "cors";
import sanityTest from "./routes/sanityTest";
import csv from "./routes/csv";

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/sanity", sanityTest);
app.use("/csv", csv);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(5000, () => {
  console.log(`app is listening to port 5000`);
});
