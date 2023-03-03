const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());

const userRoutes = require('./Routes/UserRoutes')

// Routes
app.use('/', userRoutes)


// Mongo Connections
mongoose
  .connect(process.env.DATABASE_URL ,  {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});
