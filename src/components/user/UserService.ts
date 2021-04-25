import User, { IUser } from './UserModel';
import { IUserReq, UserKey } from './UserTypes';

export default {
	async [UserKey.getUser](id: number) {
		return User.query().findById(id);
	},
	async [UserKey.insertUser](user: IUserReq) {
		return User.query().insert(user);
	},
	async [UserKey.updateUser](user: Partial<IUser>) {
		return User.query().update(user);
	},
}
