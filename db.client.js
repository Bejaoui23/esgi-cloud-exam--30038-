const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://postgres://ex1_db_user:U5epBg2BT7vSfeQh7qOcoQgXSl2AVCmT@dpg-co5to4m3e1ms73bbr2vg-a.oregon-postgres.render.com/ex1_db', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;