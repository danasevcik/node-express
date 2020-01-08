const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const app = express();

app.use(bodyParser.json());
app.use(adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  res.status(404);
  res.send('<h1>Page not found</h1>');
})

app.listen(3000);
