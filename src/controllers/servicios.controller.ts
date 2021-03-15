import {Request,Response} from 'express'
import {connect} from "../database";
import {ServiciosInterfaces} from "../interfaces/servicios.interfaces"


export async function getServicios(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const servicio = conn.query('select * from servicios')
    return res.json(servicio[0]);
};

export async function createServicio(req: Request, res: Response) {
    const newServicio: ServiciosInterfaces = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO servicios SET ?', [newCliente]);

    return res.json({
        message: "nuevo cliente creado"
    });
}

export async function getServicio(req: Request, res: Response): Promise<Response> {
    const id = req.params.idCli;
    const conn = await connect();
    const servicio = await conn.query('SELECT * FROM servicios WHERE idServ = ?', [id]);
    return res.json(servicio[0]);

}

export async function deleteServicio(req: Request, res: Response) {
    const id = req.params.idCli;
    const conn = await connect();
    await conn.query('DELETE FROM servicios WHERE idServ = ?', [id])
    return res.json({
        message: "Cliente borrado"
    })
}

export async function updateServicio(req: Request, res: Response) {
    const id = req.params.idCli;
    const servicio:ServiciosInterfaces = req.body;
    const conn = await connect();
    await conn.query('UPDATE servicios set ? WHERE idServ = ?', [servicio, id])
    return res.json({
        message: "Cliente actualizado"
    });
}