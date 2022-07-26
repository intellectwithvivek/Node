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

  return comments;
};
