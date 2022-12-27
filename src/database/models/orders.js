const OrdersSchema = (sequelize, DataTypes) => {
  const OrdersTable = sequelize.define(
    "orders",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      orderNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      orderPath: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      orderFileName: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      orderOriginalName: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      emissionDate: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      pdfFile: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      emitedTo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nNf: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      CTE: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      cnpjId: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER,
      },
      buyerId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: null,
        foreignKey: true,
        references: {
          model: "buyers",
          key: "id",
        },
      },
      providerId: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
          model: "providers",
          key: "id",
        },
      },
      orderStatusBuyer: {
        defaultValue: "0",
        type: DataTypes.STRING,
      },
      orderStatusProvider: {
        defaultValue: "0",
        type: DataTypes.STRING,
      },
      deliveryReceipt: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      cargoPackingList: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      deliveryCtrc: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "orders",
      // underscored: true,
      timestamps: false,
    }
  );

  OrdersTable.associate = (models) => {
    OrdersTable.belongsTo(models.buyers, {
      as: "buyers",
      foreignKey: "buyerId",
    });
    OrdersTable.belongsTo(models.providers, {
      as: "providers",
      foreignKey: "providerId",
    });
  };

  return OrdersTable;
};

module.exports = OrdersSchema;
