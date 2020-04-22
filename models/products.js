const mongoose = require('mongoose');

const productsChema = new mongoose.Schema({
  title: {
    az: { type: String, required: true },
    en: { type: String, required: true },
    ru: { type: String, required: true },
  },
  imageSrc: { type: String, required: true },
});

module.exports = mongoose.model('Products', productsChema);
