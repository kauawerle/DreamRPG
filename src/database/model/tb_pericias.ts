import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';

const PericiasModel = db.define('tb_pericias', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	},

	stunt: {
		type: Sequelize.INTEGER,
		allowNull: false
	},

	arcana: {
		type: Sequelize.INTEGER,
		allowNull: false
	},

	athletics: {
		type: Sequelize.INTEGER,
		allowNull: false
	},

	acting: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	bluff: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	stealth: {
		type: Sequelize.INTEGER,
		allowNull: false
	},

	history: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	bullying: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	intuition: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	investigation: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	handle_with_animals: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	medicine: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	nature: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	perception: {
		type: Sequelize.INTEGER, 
		allowNull: false
	},

	persuasion: {
		type: Sequelize.INTEGER,
		allowNull: false
	},

	sleight_of_hand: {
		type: Sequelize.INTEGER,
		allowNull: false
	},

	religion: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	survival: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
});

export { PericiasModel };
