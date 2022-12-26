module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('cnpjs', {
        id: {
            allowNull: false,
            type: Sequelize.INTEGER(11)
        },
        cnpj: {
            allowNull: false,
            type: Sequelize.STRING(255)
        },
        companyType: {
            allowNull: false,
            type: Sequelize.STRING(255)
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('cnpjs');
    },
  };