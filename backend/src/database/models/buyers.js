const BuyersSchema = (sequelize, DataTypes) => {
  const BuyersTable = sequelize.define(
    "buyers",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tradingName: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      cashforceTax: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsibleName: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsibleEmail: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsiblePosition: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsiblePhone: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsibleMobile: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      website: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      postalCode: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      address: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      number: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      complement: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      neighborhood: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      city: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      state: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      situation: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      situationDate: {
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
        defaultValue: null,
        type: DataTypes.INTEGER,
      },
      confirm: {
        defaultValue: 1,
        type: DataTypes.TINYINT,
      },
      email: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "buyers",
      // underscored: true,
      timestamps: false,
    }
  );
  BuyersTable.associate = (models) => {
    BuyersTable.hasMany(models.orders, {
      as: "buyers",
      foreignKey: "buyerId",
    });
  };

  return BuyersTable;
};

module.exports = BuyersSchema;
