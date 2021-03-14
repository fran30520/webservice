import {Router} from 'express'

const router = Router();

import {getClientes} from '../controllers/clientes.controller'

router.route('/')
    .get(getClientes)


export default router;


