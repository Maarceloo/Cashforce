const OffersSchema = (sequelize, DataTypes) => {
  const OffersTable = sequelize.define(
    "offers",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tax: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tariff: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      adValorem: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      float: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      iof: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      expiresIn: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      paymentStatusSponsor: {
        defaultValue: 0,
        type: DataTypes.TINYINT,
      },
      paymentStatusProvider: {
        defaultValue: 0,
        type: DataTypes.TINYINT,
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
        type: DataTypes.INTEGER,
      },
      sponsorId: {
        defaultValue: null,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "offers",
      // underscored: true,
      timestamps: false,
    }
  );
  return OffersTable;
};

module.exports = OffersSchema;
