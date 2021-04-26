/*
import express from 'express';
import UserController from './UserController';
import { IUserParams, UserKey } from './UserTypes';

const UserRoute = express.Router();

UserRoute.get<IUserParams['getUser']>('/:id', UserController[UserKey.getUser]);
UserRoute.post('/', UserController[UserKey.insertUser]);

export default UserRoute;
*/

import { AppRoute } from '../../types/route';
import UserController from './UserController';
import UserValidator from './UserValidator';
import validators from '../../utils/validators';
import Joi from 'joi';

const getPath = (path?: string) => `/user${path ? `/${path}` : ''}`;

export default ((server, config) => {
	const controller = new UserController(config);
	server.bind(controller);

	server.route({
		method: 'GET',
		path: getPath('{id}'),
		options: {
			handler: controller.getUser,
			description: 'Get user info',
			validate: {
				params: Joi.object().keys({ id: validators.id })
			}
		}
	});

	server.route({
		method: 'POST',
		path: getPath(),
		options: {
			handler: controller.createUser,
			description: 'Create a new user',
			validate: {
				payload: UserValidator.createUser
			}
		}
	});

	server.route({
		method: 'PUT',
		path: getPath('{id}'),
		options: {
			handler: controller.updateUser,
			description: 'Update user info',
			validate: {
				params: Joi.object().keys({ id: validators.id }),
				payload: UserValidator.updateUser
			}
		}
	});

}) as AppRoute
