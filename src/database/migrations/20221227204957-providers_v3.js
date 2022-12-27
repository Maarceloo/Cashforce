module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("providers", {
      fields: ["cnpjId"],
      type: "foreign key",
      name: "providers_ibfk_1",
      references: {
        table: "cnpjs",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("providers", {
      fields: ["cnpjId"],
      type: "foreign key",
      name: "providers_ibfk_1",
      references: {
        table: "cnpjs",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },
};
