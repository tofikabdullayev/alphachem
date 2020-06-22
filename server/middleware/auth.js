const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
