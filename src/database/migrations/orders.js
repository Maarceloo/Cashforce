module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      orderPath: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      orderFileName: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      orderOriginalName: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      emissionDate: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      pdfFile: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      nNf: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      CTE: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      value: {
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
      userId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
      },
      buyerId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
      },
      providerId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
      },
      deliveryReceipt: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      cargoPackingList: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      deliveryCtrc: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("orders");
  },
};
