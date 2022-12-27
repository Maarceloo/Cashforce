const service = require('../Services/InvoicesService');

const getAllInvoices = async (_req, res) => {
  const data = await service.getAllInvoices();
  return res.status(200).json(data);
};

module.exports = { getAllInvoices };