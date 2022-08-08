const express = require("express");
const app = express();
const scrapRouter = require("./routes/scrapRoutes");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));



app.use("/api/v1",scrapRouter);

app.listen(3000,(req,res)=>{
    console.log("Server Started");
})