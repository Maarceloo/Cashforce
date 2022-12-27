// https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-removeConstraint

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("orderportions", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.addIndex("orderportions", ["orderId"], {
      name: "orderId",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("orderportions", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.removeIndex("orderportions", ["orderId"], {
      name: "orderId",
    });
  },
};
