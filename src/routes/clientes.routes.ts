import {Router} from 'express'

const router = Router();

import {getClientes, createClientes, getCliente,deleteCliente,updateCliente} from '../controllers/clientes.controller'

router.route('/')
    .get(getClientes)
    .post(createClientes)

router.route('/:idCli')
    .delete(deleteCliente)
    .put(updateCliente)
router.route('/email')
    .get(getCliente)
export default router;


