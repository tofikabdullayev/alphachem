const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const products = require('./data/products.json');
const sliderData = require('./data/slider.json');
const aboutData = require('./data/about.json');
const contactData = require('./data/contact.json');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/api/products', (req, res) => {
    res.json(products);
  });

  server.get('/api/slider', (req, res) => {
    res.json(sliderData);
  });

  server.get('/api/about', (req, res) => {
    res.json(aboutData);
  });

  server.get('/api/contact', (req, res) => {
    res.json(contactData);
  });

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
