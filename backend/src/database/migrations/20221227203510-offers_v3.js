module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("offers", {
      fields: ["orderId"],
      type: "foreign key",
      name: "offers_ibfk_61",
      references: {
        table: "orders",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("offers", {
      fields: ["sponsorId"],
      type: "foreign key",
      name: "offers_ibfk_62",
      references: {
        table: "sponsors",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("offers", {
      fields: ["orderId"],
      type: "foreign key",
      name: "offers_ibfk_61",
      references: {
        table: "orders",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
    await queryInterface.removeConstraint("offers", {
      fields: ["sponsorId"],
      type: "foreign key",
      name: "offers_ibfk_62",
      references: {
        table: "sponsors",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },
};
