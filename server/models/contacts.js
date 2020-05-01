const mongoose = require('mongoose');

const contactsChema = new mongoose.Schema({
  collectionName: { type: String, required: true },
  adress: {
    az: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
    ru: {
      type: String,
      required: true,
    },
  },
  phones: [{ type: String }],
  emails: [{ type: String }],
  location: {
    lat: {
      type: String,
      required: true,
    },
    long: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model('Contacts', contactsChema);
