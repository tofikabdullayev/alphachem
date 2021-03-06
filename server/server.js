require('dotenv').config();

const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const port = process.env.PORT || 5000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  const mongoose = require('mongoose');
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  const db = mongoose.connection;
  db.on('error', (error) => console.error(error));
  db.once('open', () => console.log('Connected to Database'));

  server.use(express.json());

  server.use('/api/contact', require('./routes/contacts'));

  server.use('/api/about', require('./routes/about'));

  server.use('/api/products', require('./routes/products'));

  server.use('/api/slider', require('./routes/slider'));

  server.use('/api/auth', require('./routes/auth'));

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
