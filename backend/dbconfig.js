require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGO_URL;

mongoose.connect(url)
    .then(() => { console.log("DB connected successfully"); })
    .catch((error) => { console.log("Error in connecting DB", error); });
