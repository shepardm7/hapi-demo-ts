import { Knex } from 'knex';

export function addCommonColumns(table: Knex.CreateTableBuilder) {
	table.increments('id').primary();
	table.timestamps(true, true);
	// table.dateTime('createdAt').notNullable();
	// table.dateTime('updatedAt').notNullable();
}
