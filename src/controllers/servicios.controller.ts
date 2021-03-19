import {Request,Response} from 'express'
import {connect} from "../database";
import {ServiciosInterfaces} from "../interfaces/servicios.interfaces"


export async function getServicios(req: Request, res: Response) {
    const conn = await connect();
    conn.query('select * from servicios',(err,row)=>{
        return res.json(row);
    })

};

export async function createServicio(req: Request, res: Response) {
    const newServicio: ServiciosInterfaces = req.body;
    const conn = await connect();
    conn.query('INSERT INTO servicios SET ?', [newServicio]);

    return res.json({
        message: "nuevo servicio creado"
    });
}

export async function getServicio(req: Request, res: Response) {
    const nombre = req.params.idS;
    console.log(nombre)
    const conn = await connect();
    const servicio = conn.query('SELECT * FROM servicios WHERE nombre = ?', [nombre]);
    //console.log(servicio)
    return res.json(servicio);

}

export async function deleteServicio(req: Request, res: Response) {
    const id = req.params.idS;
    const conn = await connect();
    await conn.query('DELETE FROM servicios WHERE idS = ?', [id])
    return res.json({
        message: "Servicio borrado"
    })
}

export async function updateServicio(req: Request, res: Response) {
    const id = req.params.idCli;
    const servicio:ServiciosInterfaces = req.body;
    const conn = await connect();
    await conn.query('UPDATE servicios set ? WHERE idS = ?', [servicio, id])
    return res.json({
        message: "Servicio actualizado"
    });
}