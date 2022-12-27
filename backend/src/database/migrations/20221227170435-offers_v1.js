// https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-removeConstraint

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("offers", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.addIndex("offers", ["orderId"], {
      name: "orderId",
    });
    await queryInterface.addIndex("offers", ["sponsorId"], {
      name: "sponsorId",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("offers", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.removeIndex("offers", ["orderId"], {
      name: "orderId",
    });
    await queryInterface.removeIndex("offers", ["sponsorId"], {
      name: "sponsorId",
    });
  },
};
