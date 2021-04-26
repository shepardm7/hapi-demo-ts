import Hapi from '@hapi/hapi';

type Payload = Record<string, any>;

export interface IRequest<T extends Hapi.Request['payload'] = Payload> extends Hapi.Request {
	payload: T;
}

export type RequestHandler<Req extends Payload = Payload, ReturnVal extends any = any> =
	(request: IRequest<Req>, h: Hapi.ResponseToolkit) => ReturnVal
