const Sequelize = require('sequelize')
const db = require('./db')

//set content
const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

//If not created, this function creates a table
//User.sync()

module.exports = User
