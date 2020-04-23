const mongoose = require('mongoose');

const sliderChema = new mongoose.Schema({
  title: {
    az: { type: String, required: true },
    en: { type: String, required: true },
    ru: { type: String, required: true },
  },
  description: {
    az: { type: String, required: true },
    en: { type: String, required: true },
    ru: { type: String, required: true },
  },
  imageSrc: { type: String, required: true },
});

module.exports = mongoose.model('Slider', sliderChema);
