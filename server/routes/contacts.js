const express = require('express');
const router = express.Router();
const Contacts = require('../models/contacts');

router.get('/', async (req, res) => {
  try {
    const contacts = await Contacts.findOne({ collectionName: 'contacts' });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const contacts = new Contacts({
    collectionName: 'contacts',
    adress: {
      az: req.body.adress.az,
      en: req.body.adress.en,
      ru: req.body.adress.ru,
    },
    phones: req.body.phones,
    emails: req.body.emails,
    location: {
      lat: req.body.location.lat,
      long: req.bpdy.location.long,
    },
  });
  try {
    const newContacts = await contacts.save();
    res.status(201).json(newContacts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/', async (req, res) => {
  const contacts = {
    collectionName: 'contacts',
    adress: {
      az: req.body.adress.az,
      en: req.body.adress.en,
      ru: req.body.adress.ru,
    },
    phones: req.body.phones,
    emails: req.body.emails,
    location: {
      lat: req.body.location.lat,
      long: req.body.location.long,
    },
  };
  try {
    await Contacts.findOneAndUpdate({ collectionName: 'contacts' }, contacts);
    const updatedContacts = await Contacts.findOne({
      collectionName: 'contacts',
    });
    res.status(201).json(updatedContacts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
