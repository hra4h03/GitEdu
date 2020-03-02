const mongoose = require("mongoose");
const topicSchema = require('../course/topic.model');

const quarterSchema = new mongoose.Schema({
  quarter: {
    type: String
  },
  begining: String,
  topics: {
    type: [topicSchema],
    required: true
  },
  result: String
});

module.exports = quarterSchema;
