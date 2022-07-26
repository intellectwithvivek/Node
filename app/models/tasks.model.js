module.exports = (sequelize, Sequelize) => {
    const tasks = sequelize.define("tasks", {
      task_id: {
        type: Sequelize.INTEGER,
      },
      task: {
        type: Sequelize.STRING,
      },
      task_description: {
        type: Sequelize.STRING,
      },
      created_by: {
        type: Sequelize.STRING,
      },
      assignee: {
        type: Sequelize.STRING,
      },
      x: {
        type: Sequelize.INTEGER,
      },
      y: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      }
    });

   
  
    return tasks;
  };