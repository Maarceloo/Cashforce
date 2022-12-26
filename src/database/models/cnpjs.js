const CnpjsSchema = (sequelize, DataTypes) => {
  const CnpjsTable = sequelize.define(
    "cnpjs",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cnpj: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      companyType: {
        allowNull: false,
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
    },
    {
      tableName: "cnpjs",
      underscored: true,
      timestamps: false,
    }
  );
  return CnpjsTable;
};

module.exports = CnpjsSchema;
