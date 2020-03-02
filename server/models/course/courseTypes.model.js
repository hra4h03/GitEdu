const mongoose = require("mongoose");

const courseTypesSchema = new mongoose.Schema({
  name: {
    type: Object,
    required: true
  },
  logo: {
    required: true,
    type: String
  },
  color: {
    required: false,
    type: String
  },
  courses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Course"
    }
  ]
});

module.exports = mongoose.model("CourseTypes", courseTypesSchema);
