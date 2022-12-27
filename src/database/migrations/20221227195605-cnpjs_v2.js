module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("cnpjs", "id", {
      type: Sequelize.INTEGER(11),
      autoIncrement: 437,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("cnpjs", "id", {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: false,
    });
  },
};
