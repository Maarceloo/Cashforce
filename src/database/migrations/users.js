module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      phoneNumber: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      mobile: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      departament: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      verificationCode: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      emailChecked: {
        allowNull: false,
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
      cashforceAdm: {
        allowNull: false,
        type: Sequelize.TINYINT(1),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("users");
  },
};
