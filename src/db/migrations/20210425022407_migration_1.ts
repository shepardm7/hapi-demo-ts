import { Knex } from "knex";
import { addCommonColumns } from '../migrationUtils';

export async function up(knex: Knex): Promise<void> {
	return knex.schema
		.createTable('user', (table) => {
			addCommonColumns(table);
			table.string('firstName').nullable();
			table.string('lastName').notNullable();
			table.string('username').notNullable();
			table.string('email').notNullable();
			table.string('password').notNullable();
		})
		.createTable('post', (table) => {
			addCommonColumns(table);
			table.string('title').notNullable();
			table.string('body').notNullable();
			table.integer('userId').notNullable().references('id').inTable('user');
		})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema
		.dropTableIfExists('post')
		.dropTableIfExists('user')
}

