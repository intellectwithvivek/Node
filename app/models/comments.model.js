const { users, tasks } = require(".");

module.exports = (sequelize, Sequelize) => {
  const comments = sequelize.define("comments", {
    comment_id: {
      type: Sequelize.INTEGER,
    },
    comment: {
      type: Sequelize.STRING,
    },
    task_id: {
      type: Sequelize.INTEGER,
    },
  });

//   try {
//     tasks.hasMany(comments, { foreignKey: "task_id", as: "comments" });
//     comments.belongsTo(tasks, { foreignKey: "task_id" });
//   } catch (error) {
//     console.log(error, "Error");
//   }

  return comments;
};
