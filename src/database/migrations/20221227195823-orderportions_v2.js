module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("orderportions", "id", {
      type: Sequelize.INTEGER(11),
      autoIncrement: 612,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("orderportions", "id", {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: false,
    });
  },
};
