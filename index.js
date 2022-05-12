const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");


dotenv.config();
console.log(process.env.MONGO_URL)
mongoose.connect(
    process.env.MONGO_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800,() => {
    console.log("Backend server is running!");
});