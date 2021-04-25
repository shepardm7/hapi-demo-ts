import { RequestHandler } from 'express';
import { IAppModel } from '../../db/AppModel';

/* Model types */
export interface IUserRes {
	id: number;
	firstName: string | null;
	lastName: string;
	username: string;
	email: string;
}

export interface IUserReq {
	firstName: string | null;
	lastName: string;
	username: string;
	email: string;
	password: string;
}

export interface IUser extends IAppModel, IUserRes {
	password: string;
}

/* Service Keys */
export enum UserKey {
	getUser = 'getUser',
	insertUser = 'insertUser',
	updateUser = 'updateUser',
}

/* Params */
export interface IUserParams {
	[UserKey.getUser]: { id: string }
}

/* Controller */
export interface IUserController {
	[UserKey.getUser]: RequestHandler<IUserParams[UserKey.getUser]>,
	[UserKey.insertUser]: RequestHandler<void, IUserRes, IUserReq>
}
