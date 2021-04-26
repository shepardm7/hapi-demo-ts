import Joi from 'joi';
import { UserProps } from './UserTypes';

const main = Joi.object().keys({
	[UserProps.firstName]: Joi.string().trim().min(2).max(255),
	[UserProps.lastName]: Joi.string().trim().min(2).max(255),
	[UserProps.username]: Joi.string().trim().min(5).max(100),
	[UserProps.email]: Joi.string().trim().email().max(255),
	[UserProps.password]: Joi.string().trim().min(8).max(100)
});

export default {
	createUser: main.fork([UserProps.lastName, UserProps.username, UserProps.email, UserProps.password], s => s.required()),
	updateUser: main
}
