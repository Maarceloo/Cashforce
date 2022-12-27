module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("buyers", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      tradingName: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      cashforceTax: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      responsibleName: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      responsibleEmail: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      responsiblePosition: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      responsiblePhone: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      responsibleMobile: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      website: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      postalCode: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      number: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      complement: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      neighborhood: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      state: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      phoneNumber: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      situation: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      situationDate: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
      },
      confirm: {
        type: Sequelize.TINYINT(1),
      },
      email: {
        allowNull: null,
        type: Sequelize.STRING(255),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("buyers");
  },
};
