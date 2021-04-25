require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import Router from './components/index/Route';
import dbSetup from './db/dbSetup';

dbSetup();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use('/api', Router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
