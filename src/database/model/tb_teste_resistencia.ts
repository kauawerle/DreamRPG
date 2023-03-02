import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';

const TestResistenceModel = db.define('tb_test_resistence', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	},

	strength: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},

	intelligence: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},

	dexterity: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},

	wisdom: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},

	constitution: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},

	charisma: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	
	initiative: {
		type: Sequelize.DOUBLE,
		allowNull: false
	}
});

export { TestResistenceModel };
