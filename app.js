const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const path = require('path')
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
//staticly serve the public folder within the current dir
app.use(adminData.routes);
app.use(shopRoutes);


app.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
})

app.listen(3000);
