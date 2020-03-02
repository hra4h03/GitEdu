const express = require("express");
const router = express.Router();
const Homepage = require("../models/homePageModel");

router.get("/", async (req, res) => {
  const mainPage = await Homepage.find({});
  res.json({ mainPage });
});

router.post("/", async (req, res) => {
  const { about_us, opportunities } = req.body;
  let homePage = new Homepage({
    about_us,
    opportunities
  });

  try {
    let data = await homePage.save();
    res.json({ message: "success" }).status(201);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
