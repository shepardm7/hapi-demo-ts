import { RequestHandler } from 'express';
import { IAppModel } from '../../db/AppModel';

export enum UserProps {
	firstName = 'firstName',
	lastName = 'lastName',
	username = 'username',
	email = "email",
	password = 'password'
}

/* Model types */
export interface IUserRes {
	id: number;
	[UserProps.firstName]: string | null;
	[UserProps.lastName]: string;
	[UserProps.username]: string;
	[UserProps.email]: string;
}

export interface IUserReq {
	[UserProps.firstName]: string | null;
	[UserProps.lastName]: string;
	[UserProps.username]: string;
	[UserProps.email]: string;
	[UserProps.password]: string;
}

export interface IUser extends IAppModel, IUserRes {
	[UserProps.password]: string;
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
