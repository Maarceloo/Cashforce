const SponsorsSchema = (sequelize, DataTypes) => {
  const SponsorsTable = sequelize.define(
    "sponsors",
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
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      cashforceTax: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsibleName: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsibleEmail: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsiblePosition: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsiblePhone: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      responsibleMobile: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      website: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      postalCode: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      number: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      complement: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      neighborhood: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      bank: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      bankAgency: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      account: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      situation: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      situationDate: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cnpjId: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "sponsors",
      // underscored: true,
      timestamps: false,
    }
  );
  return SponsorsTable;
};

module.exports = SponsorsSchema;
