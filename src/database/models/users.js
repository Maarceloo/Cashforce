const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define(
    "users",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      mobile: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      departament: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      verificationCode: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING,
      },
      emailChecked: {
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
      cashforceAdm: {
        defaultValue: 0,
        type: DataTypes.TINYINT,
      },
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
    }
  );
  return UsersTable;
};

module.exports = UsersSchema;
