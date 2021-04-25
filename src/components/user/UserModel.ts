import Objection, { JSONSchema } from 'objection';
import AppModel, { IAppModel } from '../../db/AppModel';

export interface IUser extends IAppModel {
	firstName: string | null;
	lastName: string;
	username: string;
	email: string;
	password: string;
}

export default class User extends AppModel implements IUser {
	firstName!: string;
	lastName!: string;
	username!: string;
	email!: string;
	password!: string;

	fullName = () => `${this.firstName} ${this.lastName}`;

	static virtualAttributes = ['fullName'];

	static tableName = 'user';

	static jsonSchema: JSONSchema = {
		type: 'object',
		required: ['lastName', 'username', 'email', 'password'],
		properties: {
			id: { type: 'integer' },
			firstName: { type: ['string', 'null'], minLength: 2, maxLength: 255 },
			lastName: { type: 'string', minLength: 2, maxLength: 255 },
			username: { type: 'string', minLength: 5, maxLength: 100 },
			email: { type: 'string', minLength: 6, maxLength: 255 },
			password: { type: 'string', minLength: 8, maxLength: 100 }
		}
	}

	$formatJson(json: Objection.Pojo['user']): Objection.Pojo {
		const { password, ...rest } = super.$formatJson(json);
		return rest;
	}

	// static relationMappings: RelationMappings = {
	// 	post: {
	// 		relation: Model.HasManyRelation,
	// 		modelClass: Post,
	// 		join: {
	// 			from: 'user.id',
	// 			to: 'post.id'
	// 		}
	// 	}
	// }
}
