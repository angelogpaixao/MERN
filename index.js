const express = require("express");
const userRoute = require("./src/routes/user.route")
const app = express();
const connectDatabase = require("./src/database/db")

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000);