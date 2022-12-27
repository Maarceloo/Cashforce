module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("buyers", "id", {
      type: Sequelize.INTEGER(11),
      autoIncrement: 152,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("buyers", "id", {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: false,
    });
  },
};
