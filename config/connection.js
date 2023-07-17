const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// if in production it will use the connection to jawsdb
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
// if on local dev it will use localhost and not try to use deployed jawsdb in production
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    // process.env.SECRET,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
