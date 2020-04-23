const express = require('express');
const router = express.Router();
const About = require('../models/about');

router.get('/', async (req, res) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const about = new About({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const newAbout = await about.save();
    res.status(201).json(newAbout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const about = {
    title: req.body.title,
    description: req.body.description,
  };
  try {
    const selectedAbout = (aboutRemove = await About.findById(req.params.id));
    if (selectedAbout === null) {
      return res
        .status(404)
        .json({ message: 'Cannot find selected about info' });
    }
    await About.findOneAndUpdate({ _id: req.params.id }, about);
    res.status(201).json(about);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  let aboutRemove;
  try {
    aboutRemove = await About.findById(req.params.id);
    if (aboutRemove === null) {
      return res
        .status(404)
        .json({ message: 'Cannot find selected about info' });
    }
    await aboutRemove.remove();
    res.json({ message: 'Deleted selected about info' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
