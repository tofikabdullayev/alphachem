const express = require('express');
const router = express.Router();
const Slider = require('../models/slider');

router.get('/', async (req, res) => {
  try {
    const slider = await Slider.find();
    res.json(slider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const slider = new Slider({
    title: req.body.title,
    description: req.body.description,
    imageSrc: req.body.imageSrc,
  });
  try {
    const newSlider = await slider.save();
    res.status(201).json(newSlider);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const slider = {
    title: req.body.title,
    description: req.body.description,
    imageSrc: req.body.imageSrc,
  };
  try {
    const selectedSlider = await Slider.findById(req.params.id);
    if (selectedSlider === null) {
      return res
        .status(404)
        .json({ message: 'Cannot find selected slider info' });
    }
    await Slider.findOneAndUpdate({ _id: req.params.id }, slider);
    res.status(201).json(slider);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  let sliderRemove;
  try {
    sliderRemove = await Slider.findById(req.params.id);
    if (sliderRemove === null) {
      return res
        .status(404)
        .json({ message: 'Cannot find selected slider info' });
    }
    await sliderRemove.remove();
    res.json({ message: 'Deleted selected slider info' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
