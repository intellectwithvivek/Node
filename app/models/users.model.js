module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    user_id: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    is_verified: {
      type: Sequelize.BOOLEAN,
    }
  });

  return users;
};
