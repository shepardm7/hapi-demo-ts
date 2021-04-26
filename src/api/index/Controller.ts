import { IServerConfigurations } from '../../config';

export default class Controller {
	protected configs: IServerConfigurations;

	constructor(configs: IServerConfigurations) {
		this.configs = configs;
	}
}
