import express from 'express';
import UserController from './UserController';
import { IUserParams, UserKey } from './UserTypes';

const UserRoute = express.Router();

UserRoute.get<IUserParams['getUser']>('/:id', UserController[UserKey.getUser]);
UserRoute.post('/', UserController[UserKey.insertUser]);

export default UserRoute;
