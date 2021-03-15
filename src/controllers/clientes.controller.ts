import {Request, Response} from 'express'
import {connect} from "../database";
import {ClientesInterfaces} from "../interfaces/clientes.interfaces"

export async function getClientes(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const cliente = conn.query('select * from clientes')
    return res.json(cliente[0]);
};

export async function createClientes(req: Request, res: Response) {
    const newCliente: ClientesInterfaces = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO clientes SET ?', [newCliente]);

    return res.json({
        message: "nuevo cliente creado"
    });
}

export async function getCliente(req: Request, res: Response): Promise<Response> {
    const id = req.params.idCli;
    const conn = await connect();
    const cliente = await conn.query('SELECT * FROM clientes WHERE idCli = ?', [id]);
    return res.json(cliente[0]);

}

export async function deleteCliente(req: Request, res: Response) {
    const id = req.params.idCli;
    const conn = await connect();
    const cliente = await conn.query('DELETE FROM clientes WHERE idCli = ?', [id])
    return res.json({
        message: "Cliente borrado"
    })
}

export async function updateCliente(req: Request, res: Response) {
    const id = req.params.idCli;
    const cliente = req.body;
    const conn = await connect();
    const updateCli = await conn.query('UPDATE clientes set ? WHERE idCli = ?',[cliente,id])
    return res.json({
        message: "Cliente actualizado"
});
}