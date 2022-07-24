module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
      user_id: {
        type: Sequelize.INTEGER,
      },
      site_name: {
        type: Sequelize.STRING,
      },
      site_id: {
        type: Sequelize.INTEGER,
      }
    });
  
    return users;
  };
  