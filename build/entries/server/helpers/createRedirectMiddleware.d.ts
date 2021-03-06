import { NextFunction, Request, Response } from 'express';
declare type TOptions = {
    base: string;
    url?: string;
    status?: string | number;
    verbose?: boolean;
};
/**
 * Create middleware to serve static files.
 * If there is a client development server running we are using proxy to serve files.
 * Client development server port will be taken from node js server launch arguments.
 */
export default function createRedirectMiddleware(options: TOptions): (req: Request, res: Response, next: NextFunction) => Promise<any>;
export {};
