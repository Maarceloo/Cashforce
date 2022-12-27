// https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-removeConstraint

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("users", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.addConstraint("users", {
      fields: ["email"],
      type: "unique",
      name: "email",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("users", {
      fields: ["id"],
      type: "primary key",
    });
    await queryInterface.removeConstraint("users", {
      fields: ["email"],
      type: "unique",
      name: "email",
    });
  },
};
