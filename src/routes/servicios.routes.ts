import {Router} from "express";

const router = Router();

import{getServicios,createServicio,getServicio,deleteServicio,updateServicio} from "../controllers/servicios.controller";

router.route('/')
    .get(getServicios)
    .post(createServicio)

router.route('/:idServ')
    .get(getServicio)
    .delete(deleteServicio)
    .put(updateServicio)

export default router;