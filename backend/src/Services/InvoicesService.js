const { orders, providers, buyers } = require("../../src/database/models");

const getAllInvoices = async () => {
  const data = await orders.findAll({
    include: [
      {
        model: buyers,
        as: "buyers",
      },
      {
        model: providers,
        as: "providers",
      },
    ],
  });
  return data;
};

module.exports = { getAllInvoices };
