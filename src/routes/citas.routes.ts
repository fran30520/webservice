import {Router} from "express";

const router = Router();

import {getCitas,createCita,getCita,deleteCita,updateCita} from "../controllers/citas.controller";

router.route("/")
    .get(getCitas)
    .post(createCita)

router.route("/:IdC")
    .get(getCita)
    .delete(deleteCita)
    .put(updateCita)


export default router;