const OrderportionsSchema = (sequelize, DataTypes) => {
  const OrderportionsTable = sequelize.define(
    "orderportions",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      nDup: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dVenc: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vDup: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      availableToMarket: {
        defaultValue: 1,
        type: DataTypes.TINYINT(1),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      orderId: {
        defaultValue: null,
        type: DataTypes.INTEGER(11),
      },
    },
    {
      tableName: "orderportions",
      underscored: true,
      timestamps: false,
    }
  );
  return OrderportionsTable;
};

module.exports = OrderportionsSchema;
