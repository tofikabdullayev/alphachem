const mongoose = require('mongoose');

const sliderChema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageSrc: { type: String, required: true },
});

module.exports = mongoose.model('Slider', sliderChema);
