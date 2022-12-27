const { Router } = require('express');
const { getAllInvoices } = require('../Controllers/InvoicesController');

const invoicesRoute = Router();

invoicesRoute.get('/', getAllInvoices);

module.exports = invoicesRoute;
