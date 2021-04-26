/*
import express from 'express';
import UserRoute from '../user/UserRoute';

const Router = express.Router();

Router.use('/user', UserRoute);

export default Router;
*/

import { AppRoute } from '../../types/route';
import UserRoute from '../user/UserRoute';

export default ((server, config) => {
	UserRoute(server, config);
}) as AppRoute;
