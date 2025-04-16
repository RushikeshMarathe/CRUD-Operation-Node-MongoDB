const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes/path");
const connection = require("./db/connection");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/v1",routes);


connection();

const port = process.env.PORT || 4000;



app.listen(port,(req,res)=>{
    console.log("Server Running on " + port + " Port");
});
