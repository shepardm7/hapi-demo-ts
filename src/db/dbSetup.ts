import knex from 'knex';
import { Model } from 'objection';
const knexConfig = require('./knexfile.ts');

export default () => {
	const db = knex(knexConfig.development);
	db.on('connected', () => {
		console.log('connected to db');
	})
	Model.knex(db);
};
