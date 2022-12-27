module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("orders", {
      fields: ["buyerId"],
      type: "foreign key",
      name: "orders_ibfk_139",
      references: {
        table: "buyers",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("orders", {
      fields: ["providerId"],
      type: "foreign key",
      name: "orders_ibfk_140",
      references: {
        table: "providers",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("orders", {
      fields: ["cnpjId"],
      type: "foreign key",
      name: "orders_ibfk_141",
      references: {
        table: "cnpjs",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("orders", {
      fields: ["userId"],
      type: "foreign key",
      name: "orders_ibfk_142",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("orders", {
      fields: ["buyerId"],
      type: "foreign key",
      name: "orders_ibfk_139",
      references: {
        table: "buyers",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
    await queryInterface.removeConstraint("orders", {
      fields: ["providerId"],
      type: "foreign key",
      name: "orders_ibfk_140",
      references: {
        table: "providers",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
    await queryInterface.removeConstraint("orders", {
      fields: ["cnpjId"],
      type: "foreign key",
      name: "orders_ibfk_141",
      references: {
        table: "cnpjs",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
    await queryInterface.removeConstraint("orders", {
      fields: ["userId"],
      type: "foreign key",
      name: "orders_ibfk_142",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },
};
