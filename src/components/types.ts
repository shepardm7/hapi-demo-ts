import { Request, Response, NextFunction, RequestHandler } from 'express';

export type Controller = (req: Request, res : Response, next : NextFunction) => any
export type Controllers<Key extends string> = Record<Key, RequestHandler>;
