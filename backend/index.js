const express = require("express");
const app = express();
const mongoose = require("mongoose");
const StudentRouter = require("./Routes/Student.routes")
const ExoRouter = require("./Routes/Exo.routes")
const cors = require("cors");
// connect to the database
mongoose
  .connect("mongodb://localhost:27017/exo-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error occurred while connecting to the database. " + err);
  });

// app.use(bodyParser.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use ('/Students', StudentRouter)
app.use ('/Exos', ExoRouter)

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
