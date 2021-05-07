import {Router} from "express";

const router = Router();


import {login} from '../controllers/auth2.controller';

router.route('')
    .post(login)

export default router;