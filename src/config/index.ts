import nconf from 'nconf';
import path from 'path';

// Read Configurations
const configs = new nconf.Provider({
	env: true,
	argv: true,
	store: {
		type: 'file',
		file: path.join(__dirname, `./config.${process.env.NODE_ENV || 'development'}.json`)
	}
});

export interface IServerConfigurations {
	port: number;
	routePrefix: string;
}

export interface IDataConfiguration {
	filePath: string;
}

export function getDatabaseConfig(): IDataConfiguration {
	return configs.get('database');
}

export function getServerConfigs(): IServerConfigurations {
	return configs.get('server');
}
