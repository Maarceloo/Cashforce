module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("buyers", {
      fields: ["cnpjId"],
      type: "foreign key",
      name: "buyers_ibfk_1",
      references: {
        table: "cnpjs",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("buyers", {
      fields: ["cnpjId"],
      type: "foreign key",
      name: "buyers_ibfk_1",
      references: {
        table: "cnpjs",
        field: "id",
      },
      onDelete: "set null",
      onUpdate: "cascade",
    });
  },
};
