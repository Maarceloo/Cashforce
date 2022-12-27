module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("sponsors", "id", {
      type: Sequelize.INTEGER(11),
      autoIncrement: 17,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("sponsors", "id", {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: false,
    });
  },
};
