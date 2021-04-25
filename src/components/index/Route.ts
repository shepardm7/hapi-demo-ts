import express from 'express';
import UserRoute from '../user/UserRoute';

const Router = express.Router();

Router.use('/user', UserRoute);

export default Router;
