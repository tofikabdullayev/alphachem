const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/auth');
const router = Router();

router.post(
  '/register',
  [
    check('username', 'Incorrect username').exists(),
    check('name', 'Incorrect name').exists(),
    check('password', 'Password should be min 6 letters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect user data',
        });
      }

      const { username, password, name } = req.body;

      const candidate = await User.findOne({ username });

      if (candidate) {
        return res.status(400).json({ message: 'Already registered' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ username, password: hashedPassword, name });

      await user.save();

      res.status(201).json({ message: 'User created' });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
);

// /api/auth/login
router.post(
  '/login',
  [
    check('username', 'Invalid login data').exists(),
    check('password', 'Invalid login data').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid login data',
        });
      }

      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: 'Invalid login data' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid login data' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWTSECRET, {
        expiresIn: '1d',
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
);

module.exports = router;
