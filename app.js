const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const path = require('path')
const app = express();

app.use(bodyParser.json());
app.use(adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
})

app.listen(3000);
