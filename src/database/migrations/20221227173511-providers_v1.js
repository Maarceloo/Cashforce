// https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-removeConstraint

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("providers", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.addIndex("providers", ["cnpjId"], {
      name: "cnpjId",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("providers", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.removeIndex("providers", ["cnpjId"], {
      name: "cnpjId",
    });
  },
};
