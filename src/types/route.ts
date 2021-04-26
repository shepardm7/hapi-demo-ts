import Hapi from '@hapi/hapi';

import { IServerConfigurations } from '../config';

export type AppRoute = (server: Hapi.Server, config: IServerConfigurations) => void;
