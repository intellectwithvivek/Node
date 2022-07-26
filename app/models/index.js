const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require("./users.model.js")(sequelize, Sequelize);
db.sites = require("./sites.model.js")(sequelize,Sequelize);
db.tasks = require('./tasks.model.js')(sequelize, Sequelize);
db.comments = require("./comments.model.js")(sequelize, Sequelize);
db.attachments = require("./attachments.model.js")(sequelize, Sequelize);

try {
  db.tasks.hasMany(db.comments, { foreignKey: "task_id", as: "comments" });
  db.comments.belongsTo(db.tasks, { foreignKey: "task_id" });
  
} catch (error) {
  console.log("Error:-", error);
}
module.exports = db;
