import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import { Database, RunResult } from 'sqlite3';
import path from 'path';

const commonConfig: Knex.Config = {
	migrations: {
		tableName: 'knex_migrations'
	},
	seeds: {
		directory: './seeds',
	},
	debug: true,
	...knexSnakeCaseMappers()
};

const development: Knex.Config = {
	...commonConfig,
	client: 'sqlite3',
	useNullAsDefault: true,
	connection: {
		filename: path.resolve(__dirname, process.env.DB_PATH || '../../database.sqlite'),
	},
	pool: {
		afterCreate: (conn: Database, cb: (this: RunResult, err: Error | null) => void) => {
			conn.run('PRAGMA foreign_keys = ON', cb);
		},
	},
}

const production: Knex.Config = {
	...commonConfig,
	client: 'postgresql',
	connection: {
		database: 'node_demo',
		user: 'postgres',
		password: 'password'
	},
	pool: {
		min: 2,
		max: 10
	},
}

module.exports = { development, production };
