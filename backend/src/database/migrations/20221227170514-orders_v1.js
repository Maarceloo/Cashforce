// https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-removeConstraint

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("orders", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.addConstraint("orders", {
      fields: ["orderNfId"],
      type: "unique",
      name: "orderNfId",
    });
    await queryInterface.addConstraint("orders", {
      fields: ["orderPath"],
      type: "unique",
      name: "orderPath",
    });
    await queryInterface.addConstraint("orders", {
      fields: ["orderFileName"],
      type: "unique",
      name: "orderFileName",
    });
    await queryInterface.addConstraint("orders", {
      fields: ["orderOriginalName"],
      type: "unique",
      name: "orderOriginalName",
    });
    await queryInterface.addIndex("orders", ["userId"], {
      name: "userId",
    });
    await queryInterface.addIndex("orders", ["buyerId"], {
      name: "buyerId",
    });
    await queryInterface.addIndex("orders", ["cnpjId"], {
      name: "cnpjId",
    });
    await queryInterface.addIndex("orders", ["providerId"], {
      name: "providerId",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("orders", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.removeConstraint("orders", {
      fields: ["orderNfId"],
      type: "unique",
      name: "orderNfId",
    });
    await queryInterface.removeConstraint("orders", {
      fields: ["orderPath"],
      type: "unique",
      name: "orderPath",
    });
    await queryInterface.removeConstraint("orders", {
      fields: ["orderFileName"],
      type: "unique",
      name: "orderFileName",
    });
    await queryInterface.removeConstraint("orders", {
      fields: ["orderOriginalName"],
      type: "unique",
      name: "orderOriginalName",
    });
    await queryInterface.removeIndex("orders", ["userId"], {
      name: "userId",
    });
    await queryInterface.removeIndex("orders", ["buyerId"], {
      name: "buyerId",
    });
    await queryInterface.removeIndex("orders", ["cnpjId"], {
      name: "cnpjId",
    });
    await queryInterface.removeIndex("orders", ["providerId"], {
      name: "providerId",
    });
  },
};
