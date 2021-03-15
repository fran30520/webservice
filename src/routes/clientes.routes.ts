import {Router} from 'express'

const router = Router();

import {getClientes, createClientes, getCliente,deleteCliente,updateCliente} from '../controllers/clientes.controller'

router.route('/')
    .get(getClientes)
    .post(createClientes)

router.route('/:idCli')
    .get(getCliente)
    .delete(deleteCliente)
    .put(updateCliente)

export default router;


