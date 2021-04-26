require('dotenv').config();
import { IServerConfigurations } from './config';
import dbSetup from './db/dbSetup';
import Hapi from '@hapi/hapi';
import Route from './api/index/Route';

dbSetup();

const port = process.env.PORT || 4000;

export const init = async (configs: IServerConfigurations) => {
	const server = new Hapi.Server({
		debug: { request: ['error'] },
		port,
		routes: {
			cors: {
				origin: ['*']
			}
		}
	});

	if (configs.routePrefix) {
		server.realm.modifiers.route.prefix = configs.routePrefix;
	}

	// setup routes
	Route(server, configs);

	return server;

}

/*const app = express();

app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use('/api', Router);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})*/
