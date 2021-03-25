import {Request,Response} from 'express'
import {connect} from "../database";
import {ServiciosInterfaces} from "../interfaces/servicios.interfaces";

export async function getServicios(req: Request, res: Response) {
    const conn = await connect();
    conn.query('select * from servicios', (err, rows) => {
        return res.json(rows)
    })
}
export async function createServicio(req: Request, res: Response):Promise<Response> {

    const newServicios: ServiciosInterfaces = req.body;
    const conn = await connect();
    conn.query("INSERT INTO servicios SET ?",[newServicios]);

    return res.json({
        message: "nuevo Servicio creado"
    });
}

export async function getServicio(req: Request, res: Response) {
    const id = req.params.idS;
    const conn = await connect();
    conn.query('SELECT * FROM servicios WHERE idS = ?', [id],(err,rows)=> {
            return res.json(rows);}
    );}

export async function deleteServicio(req: Request, res: Response):Promise<Response> {
    const id = req.params.idS;
    const conn = await connect();
    conn.query('DELETE FROM servicios WHERE IdS = ?', [id])
    return res.json({
        message: "Servicio borrado"
    })
}

export async function updateServicio(req: Request, res: Response) {
    const id = req.params.idS;
    const Servicios: ServiciosInterfaces = req.body;
    const conn = await connect();
    const consulta = conn.query('UPDATE servicios set = ? WHERE idCli = ?',[Servicios,id])
    console.log(consulta);
    return res.json(consulta);

}