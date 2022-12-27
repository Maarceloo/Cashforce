// https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-removeConstraint

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("cnpjs", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.addConstraint("cnpjs", {
      fields: ["cnpj"],
      type: "unique",
      name: "cnpj",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("cnpjs", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.removeConstraint("cnpjs", {
      fields: ["cnpj"],
      type: "unique",
      name: "cnpj",
    });
  },
};
