const mongoose = require("mongoose");
 
const topicSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = topicSchema;
