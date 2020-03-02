const mongoose = require("mongoose");
const quarterSchema = require("../course/quarter.model");

const optionsSchema = new mongoose.Schema({
  level: {
    type: String,
    default: "սկսնակ"
  },
  duration: {
    type: String,
    default: "5 ամիս"
  },
  price: {
    type: String,
    default: 30000
  }
});

const courseSchema = new mongoose.Schema({
  type: {
    type: mongoose.Schema.ObjectId,
    ref: "CourseTypes"
  },
  title: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  situation: {
    required: false,
    type: String
  },
  averageTableOfSalary: String,
  description: {
    type: String,
    required: true
  },
  options: {
    type: optionsSchema,
    required: true
  },
  yearLearning: {
    type: [quarterSchema],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  opportunities: {
    type: Array,
    required: false
  },
  trainer: [
    {
      image: {
        required: false,
        type: String
      },
      name: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: false
      }
    }
  ]
});

module.exports = mongoose.model("Course", courseSchema);
module.exports.Schema = courseSchema;
