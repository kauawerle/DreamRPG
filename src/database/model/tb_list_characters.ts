import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';
import { CharactersModel } from './tb_characters';
import { UserModel } from './tb_user';

const ListCharactersModel = db.define('tb_list_characters', {
    id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	}
});

UserModel.belongsTo(ListCharactersModel, {
	constraints: true,
	foreignKey: 'id_user',
});

CharactersModel.belongsTo(ListCharactersModel, {
	constraints: true,
	foreignKey: 'id_characters',
});

export { ListCharactersModel };
