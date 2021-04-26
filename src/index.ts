import * as Server from './server';
import { getServerConfigs, IServerConfigurations } from './config';

console.log(`Running environment ${process.env.NODE_ENV || "development"}`);

process.on('uncaughtException', (error: Error) => {
	console.error(`uncaughtException ${error}`);
});

// catch unhandled rejected promises
process.on('unhandledRejection', (reason: any) => {
	console.error(`unhandledRejection ${reason}`);
});

// Define async start function
const start = async ({ config }: { config: IServerConfigurations}) => {
	const server = await Server.init(config);
	await server.start();
};

// Starting server
const config = getServerConfigs();

// start the server
start({ config });
