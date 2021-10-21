const { Sequelize } = require('sequelize')
const { dataInfo } = require('./database.json')

const sequelize = new Sequelize(
	dataInfo.database,
	dataInfo.username,
	dataInfo.password,
	{
		host: dataInfo.host,
		port: dataInfo.port,
		dialect: dataInfo.dialect,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
		define: {
			freezeTableName: true,
		},
	}
)

module.exports = { sequelize }
