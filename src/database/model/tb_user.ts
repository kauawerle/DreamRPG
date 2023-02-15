import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';

const UserModel = db.define('tb_users', {
    id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	},

	name: {
		type: Sequelize.STRING(200),
		allowNull: false
	},

	email: {
		type: Sequelize.STRING(200),
		allowNull: false
	},
    password: {
        type: Sequelize.STRING(200),
		allowNull: false
    }
});

export { UserModel };
