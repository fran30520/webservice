import {Request, Response} from 'express'
import {connect} from "../database";
import {ClientesInterfaces} from "../interfaces/clientes.interfaces"

export async function getClientes(req: Request, res: Response){
    const conn = await connect();
    conn.query('select * from clientes',(err,rows)=>{
        return res.json(rows)
    })

}

export async function createClientes(req: Request, res: Response):Promise<Response> {

    const newCliente: ClientesInterfaces = req.body;
    const conn = await connect();
    conn.query("INSERT INTO clientes SET ?",[newCliente]);

    return res.json({
        message: "nuevo cliente creado"
    });
}

export async function getCliente(req: Request, res: Response) {
    const id = req.params.idCli
    const conn = await connect();
    conn.query('SELECT * FROM clientes WHERE idCli = ?', [id],(err,rows)=> {
        return res.json(rows);}
    );}

export async function deleteCliente(req: Request, res: Response):Promise<Response> {
    const id = req.params.idCli;
    const conn = await connect();
    conn.query('DELETE FROM clientes WHERE idCli = ?', [id])
    return res.json({
        message: "Cliente borrado"
    })
}

export async function updateCliente(req: Request, res: Response) {
    const id = req.params.idCli;
    const cliente: ClientesInterfaces = req.body;
    const conn = await connect();
    const consulta = conn.query('UPDATE clientes set  ? WHERE idCli = ?',[cliente,id])
        console.log(consulta);
        return res.json(consulta);

    }