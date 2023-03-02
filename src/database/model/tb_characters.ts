import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';
import { AttributesModel } from './tb_atributtes';

const CharactersModel = db.define('tb_characters', {
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

	class: {
		type: Sequelize.STRING(200),
		allowNull: false
	},

	bread: {
		type: Sequelize.STRING(200),
		allowNull: false
	},

	weapons: {
		type: Sequelize.STRING(200),
		allowNull: false
	},

	personality: {
		type: Sequelize.STRING(200),
		allowNull: false
	},
	
	power_spells: {
		type: Sequelize.STRING(200),
		allowNull: false
	},
	
	hp: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	
	ties: {
		type: Sequelize.STRING(200),
		allowNull: false
	},
	
	bag: {
		type: Sequelize.STRING(200),
		allowNull: false
	},
	
	flaws: {
		type: Sequelize.STRING(200),
		allowNull: false
	}
});

AttributesModel.belongsTo(CharactersModel, {
	constraints: true,
	foreignKey: 'id_attributes',
});

export { CharactersModel };
