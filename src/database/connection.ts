import { Sequelize } from 'sequelize';

let db = new Sequelize('postgres://postgres:root@localhost:5432/dream-rpg');

export { db };
