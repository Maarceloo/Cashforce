module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("providers", "id", {
      type: Sequelize.INTEGER(11),
      autoIncrement: 235,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("providers", "id", {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: false,
    });
  },
};
