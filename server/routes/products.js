const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const products = new Products({
    title: req.body.title,
    imageSrc: req.body.imageSrc,
  });
  try {
    const newProducts = await products.save();
    res.status(201).json(newProducts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const products = {
    title: req.body.title,
    imageSrc: req.body.imageSrc,
  };
  try {
    const selectedProducts = (productsRemove = await Products.findById(
      req.params.id
    ));
    if (selectedProducts === null) {
      return res
        .status(404)
        .json({ message: 'Cannot find selected products info' });
    }
    await Products.findOneAndUpdate({ _id: req.params.id }, products);
    res.status(201).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  let productsRemove;
  try {
    productsRemove = await Products.findById(req.params.id);
    if (productsRemove === null) {
      return res
        .status(404)
        .json({ message: 'Cannot find selected products info' });
    }
    await productsRemove.remove();
    res.json({ message: 'Deleted selected products info' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
