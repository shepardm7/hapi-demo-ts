import { JSONSchema, Model, RelationMappingsThunk } from 'objection';
import User from '../user/UserModel';
import AppModel, { IAppModel } from '../../db/AppModel';

export interface IPost extends IAppModel {
	title: string;
	body: string;
	userId: number;
}

export default class Post extends AppModel implements IPost {
	title!: string;
	body!: string;
	userId!: number;

	static tableName = 'post';

	static jsonSchema: JSONSchema = {
		type: 'object',
		required: ['title', 'body', 'userId'],
		properties: {
			id: { type: 'integer' },
			title: { type: 'string' },
			body: { type: 'string' },
			userId: { type: 'integer' }
		}
	}

	static relationMappings: RelationMappingsThunk = () => ({
		user: {
			relation: Model.BelongsToOneRelation,
			modelClass: User,
			join: {
				from: 'post.userId',
				to: 'user.id',
			}
		}
	})
}
