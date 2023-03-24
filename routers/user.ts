import { Router } from 'express';
import { auth } from '../middleware/auth';

export default function users() {
    const router = Router();

    router
        .get('/', auth, (req, res, next) => {
            res.json({
                id: 1,
                firstname: 'Matt',
                lastname: 'Morgan',
            });
        })
        .get('/login', (req, res, next) => {
            // check creds
            // encode token
            res.cookie('at', 'test', {
                httpOnly: true,
                signed: true,
            });

            res.status(200).send('test');
        })
        .get('/logout', (req, res, next) => {
            res.clearCookie('at');

            res.status(200).send();
        });

    return router;
}