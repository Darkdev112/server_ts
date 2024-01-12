import { Request,Response } from 'express';
import morgan from 'morgan'
import {logger} from './logger'
import {config} from './config'

morgan.token("message", (req : Request, res : Response) => res.statusMessage || "");

const getIpFormat = config.mode === "production" ? ":remote-addr - " : "";

const successResponseFormat = `${getIpFormat}:method :url :status - :response-time ms`;

const errorResponseFormat = `${getIpFormat}:method :url :status - :response-time ms - message: :message`;

export const successHandler = morgan(successResponseFormat, {
	skip: (req : Request, res : Response) => res.statusCode >= 400,
	stream: { write: (message : string) => logger.info(message.trim()) },
});

export const errorHandler = morgan(errorResponseFormat, {
	skip: (req : Request, res : Response) => res.statusCode < 400,
	stream: { write: (message : string) => logger.error(message.trim()) },
});