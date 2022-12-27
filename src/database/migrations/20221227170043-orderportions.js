module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orderportions", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      availableToMarket: {
        type: Sequelize.TINYINT(1),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      orderId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("orderportions");
  },
};
