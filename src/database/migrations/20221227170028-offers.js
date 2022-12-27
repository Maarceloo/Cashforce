module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
          allowNull: false,
          type: Sequelize.INTEGER(11)
      },
      tax: {
          allowNull: false,
          type: Sequelize.STRING(255)
      },
      tariff: {
          allowNull: false,
          type: Sequelize.STRING(255)
      },
      adValorem: {
          allowNull: false,
          type: Sequelize.STRING(255)
      },
      float: {
          allowNull: false,
          type: Sequelize.STRING(255)
      },
      iof: {
          allowNull: false,
          type: Sequelize.STRING(255)
      },
      expiresIn: {
          allowNull: false,
          type: Sequelize.DATE
      },
      paymentStatusSponsor: {
          type: Sequelize.TINYINT(1)
      },
      paymentStatusProvider: {
          type: Sequelize.TINYINT(1)
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      orderId: {
          allowNull: true,
          type: Sequelize.INTEGER(11)
      },
      sponsorId: {
          allowNull: true,
          type: Sequelize.INTEGER(11)
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('offers');
  },
};