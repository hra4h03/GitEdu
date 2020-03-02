const express = require("express");
const router = express.Router();
const Course = require("../models/course/course.model");
const CourseTypes = require("../models/course/courseTypes.model");

router.get("/", async (req, res) => {
  let languages = [];
  if (req.query.title) {
    try {
      const course = await Course.findOne({ title: req.query.title });
      course.yearLearning.map((learning, index) => {
        learning.topics.map(topic => {
          if (!languages.includes(topic.logo)) {
            languages.push(topic.logo);
          }
        });
      });
      return res.json({ course, languages });
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  }

  const courses = await Course.find({});
  return res.json({ courses });
});

router.post("/types", async (req, res) => {
  const { name, logo, courses, color } = req.body;
  // const typeExist = await CourseTypes.find({ name });
  // if (typeExist) return res.json("Type is already existing");

  const newType = new CourseTypes({
    name,
    logo,
    courses,
    color
  });
  try {
    const data = await newType.save();
    return res.json({ data });
  } catch (error) {
    return res.json({ error });
  }
});

router.get("/types", async (req, res) => {
  const types = await CourseTypes.find({}).populate("courses");
  if (types) return res.json({ types });
  return res.json({ message: "error" });
});

router.post("/", async (req, res) => {
  const {
    logo,
    type,
    title,
    averageTableOfSalary,
    description,
    options,
    yearLearning,
    image,
    opportunities,
    trainer
  } = req.body;

  const course = new Course({
    type,
    logo,
    title,
    averageTableOfSalary,
    description,
    options,
    yearLearning,
    image,
    opportunities,
    trainer
  });
  try {
    let data = await course.save();
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
