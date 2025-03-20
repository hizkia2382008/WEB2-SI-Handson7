import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

import { Logger } from "@nestjs/common";

export class ExecutionTimeInterceptors implements NestInterceptor {
    private readonly logger = new Logger(ExecutionTimeInterceptors.name);

    intercept(context: ExecutionContext, 
        next: CallHandler<any>):
        Observable<any> | Promise<Observable<any>> {
        const handler = context.getHandler();
        const methodName = handler.name;
        const className = context.getClass().name;
        
        const startTime = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => {
                    this.logger.log(
                        `After... ${className}.${methodName} took ${Date.now() - startTime}ms`
                    );
                }),

            );
    }
}