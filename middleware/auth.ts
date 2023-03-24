import { Request, Response, NextFunction } from 'express';

export function accessToken(req: Request, res: Response, next: NextFunction) {
    const cookies = req.signedCookies;
    const at = cookies.at;

    if (!at) {
        // Bearer [TOKEN]
        const hat = (req.header('Authorization') as string || '').split(' ').pop();

        if (!!hat) {
            req.aToken = hat;
        }
    } else {
        req.aToken = at;
    }

    next();
}

export function validAccess(token: string) {
    return token === 'test';
}

export function auth(req: Request, res: Response, next: NextFunction) {
    const at = req.aToken;

    if (!validAccess(at)) {
        // check for refresh token
        res.status(401);
        next(new Error('Unauthorized'));
        return;
    }

    next();
}