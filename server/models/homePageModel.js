const mongoose = require("mongoose");

const about_usSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
});

const opportunitiesSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
});

const homepageSchema = new mongoose.Schema({
  about_us: {
    type: Object,
    required: true
  },
  opportunities: {
    required: true,
    type: [opportunitiesSchema]
  }
});

module.exports = mongoose.model("Home Page", homepageSchema);
