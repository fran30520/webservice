import {Request, Response} from 'express'
import {connect} from "../database";

export async function getClientes(req: Request, res: Response):Promise<Response> {
    const conn = await connect()
    const cliente = await conn.query('SELECT * FROM clientes');
    return res.json(cliente[0])
}