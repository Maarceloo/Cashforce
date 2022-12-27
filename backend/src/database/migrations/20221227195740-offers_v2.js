module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("offers", "id", {
      type: Sequelize.INTEGER(11),
      autoIncrement: 40,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("offers", "id", {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: false,
    });
  },
};
