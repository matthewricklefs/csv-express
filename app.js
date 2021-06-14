import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.get("/",(req,res) => {
    res.send('Welcome to Node Babel');
});
app.listen(5000,() => {
     console.log(`app is listening to port 5000`);
});