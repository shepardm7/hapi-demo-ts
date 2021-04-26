import Controller from '../index/Controller';
import { RequestHandler } from '../../types/request';
import User from './UserModel';

// export default {
// 	[UserKey.getUser]: async ({ params: { id } }, res) => {
// 		return res.send(await UserService.getUser(+id));
// 	},
// 	[UserKey.insertUser]: async ({ body }, res) => {
// 		return res.send(await UserService[UserKey.insertUser](body))
// 	}
// } as IUserController

export default class UserController extends Controller {

	public createUser: RequestHandler = (request) => {
		return User.query().insert(request.payload);
	}

	public getUser: RequestHandler = ({ params }) => {
		return User.query().findById(params.id);
	}

	public updateUser: RequestHandler = ({ params, payload }) => {
		return User.query().findById(params.id).update(payload);
	}
}
