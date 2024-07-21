const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { PORT } = require("./config/config");

// Connect to the database
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});