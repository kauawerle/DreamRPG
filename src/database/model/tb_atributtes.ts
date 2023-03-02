import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';
import { PericiasModel } from './tb_pericias';
import { TestResistenceModel } from './tb_teste_resistencia';

const AttributesModel = db.define('tb_attributes', {
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
	
	dexterity: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	
	constitution: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	
	intelligence: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	
	wisdom: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	
	class_armd: {
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	
	displacement: {
		type: Sequelize.DOUBLE,
		allowNull: false
	}
});

PericiasModel.belongsTo(AttributesModel, {
	constraints: true,
	foreignKey: 'id_pericias',
});

TestResistenceModel.belongsTo(AttributesModel, {
	constraints: true,
	foreignKey: 'id_teste_resistencia',
});

export { AttributesModel };
