// https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-removeConstraint

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("buyers", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.addIndex("buyers", ["cnpjId"], {
      name: "cnpjId",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("buyers", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.removeIndex("buyers", ["cnpjId"], {
      name: "cnpjId",
    });
  },
};
