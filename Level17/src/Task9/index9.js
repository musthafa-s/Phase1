const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const orderRoutes = require('../Task9/routes/orderRoutes');
const errorHandler = require('../Task9/middleware/errorHandler');
require('../Task9/config/db'); 

const app = express();

app.use(bodyParser.json());

app.use('/api/orders', orderRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
