module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("sponsors", {
      fields: ["cnpjId"],
      type: "foreign key",
      name: "sponsors_ibfk_1",
      references: {
        table: "cnpjs",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("sponsors", {
      fields: ["cnpjId"],
      type: "foreign key",
      name: "sponsors_ibfk_1",
      references: {
        table: "cnpjs",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },
};
