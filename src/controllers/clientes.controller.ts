import {Request, Response} from 'express'
import {connect} from "../database";
import {ClientesInterfaces} from "../interfaces/clientes.interfaces"


export async function getClientes(req: Request, res: Response){
    const conn = await connect();
    conn.query('select * from clientes',(err,rows)=>{
        return res.json(rows)
    })

}

export async function createClientes(req: Request, res: Response){

    const newCliente: ClientesInterfaces = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        contrasena: req.body.contrasena
    };
    const conn = await connect();
    conn.query("INSERT INTO clientes SET ?",[newCliente],function (err,result){
        if(err){
            console.log(JSON.stringify(err))
                return res.status(500).json(err)
        }
        // @ts-ignore
        console.log(result.insertId)
        // @ts-ignore
        conn.query('SELECT * FROM clientes WHERE idCli = ?', [result.insertId],(err,rows)=> {
            // @ts-ignore
            console.log(rows[0])

            // @ts-ignore
            return res.json(rows[0]);});

    });


}

export async function getCliente(req: Request, res: Response) {
    const email = req.params.email;
    const conn = await connect();
    console.log(email)
    conn.query('SELECT * FROM clientes WHERE email = ?', [email],(err,rows)=> {

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
    conn.query('UPDATE clientes set  ? WHERE idCli = ?',[cliente,id],(error,result,campos)=>{
        conn.query('SELECT * FROM clientes WHERE idCli = ?', [id],(err,rows)=> {
            return res.json(rows);}
        );

})


    }