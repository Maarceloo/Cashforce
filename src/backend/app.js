const express = require('express');
const invoicesRoute = require('./Routes/Invoices')

const app = express();

app.use(express.json());
app.use('/invoices', invoicesRoute)

module.exports = app;