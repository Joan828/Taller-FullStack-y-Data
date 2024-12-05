const express = require("express");
const app = express();
const PORT = 6969;
const { dbConnection } = require("./config/config")

app.use(express.json())

app.use("/players",require("./routes/players"))

dbConnection()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));