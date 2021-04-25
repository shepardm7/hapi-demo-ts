import UserService from './UserService';
import { IUserController, UserKey } from './UserTypes';

export default {
	[UserKey.getUser]: async ({ params: { id } }, res) => {
		return res.send(await UserService.getUser(+id));
	},
	[UserKey.insertUser]: async ({ body }, res) => {
		return res.send(await UserService[UserKey.insertUser](body))
	}
} as IUserController
