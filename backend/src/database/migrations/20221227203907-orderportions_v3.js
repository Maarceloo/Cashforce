module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("orderportions", {
      fields: ["orderId"],
      type: "foreign key",
      name: "orderPortions_ibfk_1",
      references: {
        table: "orders",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("orderportions", {
      fields: ["orderId"],
      type: "foreign key",
      name: "orderPortions_ibfk_1",
      references: {
        table: "orders",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },
};
