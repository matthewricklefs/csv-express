import express from "express";
import sanityTest from "./routes/sanityTest";
import csv from "./routes/csv";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use("/sanity", sanityTest);
app.use("/csv", csv);

app.listen(5000,() => {
     console.log(`app is listening to port 5000`);
});