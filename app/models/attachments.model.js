module.exports = (sequelize, Sequelize) => {
    const attachments = sequelize.define("attachments", {
      attachment_id: {
        type: Sequelize.INTEGER,
      },
      attachment_type: {
        type: Sequelize.STRING,
      },
      attachment: {
        type: Sequelize.STRING,
      },
      task_id: {
        type: Sequelize.STRING,
      },
      
      
    });
  
    return attachments;
  };