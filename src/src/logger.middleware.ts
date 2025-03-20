import { Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger(LoggerMiddleware.name);

    use(req: Request, res: Response, next: NextFunction) {
       switch (req.method) {
            case 'POST':
            case 'PUT':
                this.logger.log(`Request: [${req.method}] | Request Body ${JSON.stringify(req.body)}`);
                break;
            case 'GET':
            case 'DELETE':
                this.logger.log(`LoggerMiddleware: Request: [${req.method}]`);
                break;
            default:
                this.logger.log(`LoggerMiddleware: Request: [${req.method}] default logging`);
                break;
        }
    next();
    }
}   