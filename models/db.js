const { Sequelize } = require('sequelize')

//set conection for database
const sequelizer = new Sequelize('testphp', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelizer
  .authenticate()
  .then(() => console.log('Conecção com banco de dados realizado com sucesso!'))
  .catch(() => console.log('Error: conecção incorreta com o banco de dados'))

module.exports = sequelizer
