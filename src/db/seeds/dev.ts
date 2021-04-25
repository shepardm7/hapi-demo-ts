import { Knex } from 'knex';
import { IUser } from '../../components/user/UserModel';
import { IPost } from '../../components/post/PostModel';

export async function seed(knex: Knex): Promise<void> {
	// truncate
	await knex.raw('DELETE FROM "user"');
	await knex.raw('DELETE FROM "post"');

	// Inserts seed entries
	await knex<IUser>('user').insert([
		{
			id: 1,
			firstName: 'John',
			lastName: 'Shepard',
			username: 'commandershepard',
			email: 'jshepard@example.com',
			password: 'password123'
		},
		{
			id: 2,
			firstName: 'Jane',
			lastName: 'Shepard',
			username: 'janes',
			email: 'janes123@example.com',
			password: 'password321'
		}
	]);

	await knex<IPost> ('post').insert([
		{
			title: 'Test post 1',
			body: 'something asdfasdf',
			userId: 1
		},
		{
			title: 'Test post 2',
			body: 'something 23424',
			userId: 1
		},
	])
}
