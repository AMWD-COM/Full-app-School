// Exo Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: Date,
  duration: Number,
  level: String,
  students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});


const Exo = mongoose.model("Exo", ExoSchema);
module.exports = Exo;

