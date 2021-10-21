const { sequelize } = require('../data/db')
const { DataTypes, Model } = require('sequelize')

class User extends Model { }

User.init(
	{
		id: {
			// id
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			unique: true,
		},
		username: {
			// 用户名
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			// 密码
			type: DataTypes.STRING,
			allowNull: false,
		},
		nickName: {
			// 昵称
			type: DataTypes.STRING,
			unique: true,
		},
		email: {
			// 邮箱
			type: DataTypes.STRING,
			unique: true,
		},
		phone: {
			// 手机
			type: DataTypes.STRING,
		},
		avatar: {
			// 头像
			type: DataTypes.STRING,
		},
	},
	{ sequelize, modelName: 'User' }
)

User.sync()

module.exports = User
