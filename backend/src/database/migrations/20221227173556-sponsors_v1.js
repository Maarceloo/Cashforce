// https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-removeConstraint

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("sponsors", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.addIndex("sponsors", ["cnpjId"], {
      name: "cnpjId",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("sponsors", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.removeIndex("sponsors", ["cnpjId"], {
      name: "cnpjId",
    });
  },
};
