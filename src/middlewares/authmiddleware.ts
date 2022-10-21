import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log("path", req.path)
    const excludePaths = ["/", "","/signin", "/signup"]
    if(excludePaths.indexOf(req.path)) next();
    try {
        const token: string = req.headers['authorization'];
        var jwt = require('jsonwebtoken');
        var user = jwt.verify(token, process.env.APP_PRIVATE_KEY);
        req.headers.user = user._doc
    } catch (error) {
        return res.status(401).send(
            {
                error:"Not authorized",
                message: 'Either the API key is missing or incorrect.',
              }
          );
    }
    next();
  }
}
