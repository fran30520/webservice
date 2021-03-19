import {Request,Response} from 'express'
import {connect} from "../database";
import {CitasInterfaces} from "../interfaces/citas.interfaces"


export async function getCitas(req: Request, res: Response) {
    const conn = await connect();
    conn.query('select * from citas',(err,row)=>{
        return res.json(row);
    })

};

export async function createCita(req: Request, res: Response) {
    const newCita: CitasInterfaces = req.body;
    const conn = await connect();
    conn.query('INSERT INTO citas SET ?', [newCita]);

    return res.json({
        message: "nueva cita creada"
    });
}

export async function getCita(req: Request, res: Response): Promise<Response> {
    const id = req.params.idC;
    console.log(id);
    const conn = await connect();
    const cita = conn.query('SELECT * FROM citas WHERE IdC = ?', [id]);
    return res.json(cita);

}

export async function deleteCita(req: Request, res: Response) {
    const id = req.params.idS;
    const conn = await connect();
    await conn.query('DELETE FROM citas WHERE IdC = ?', [id])
    return res.json({
        message: "cita borrada"
    })
}

export async function updateCita(req: Request, res: Response) {
    const id = req.params.idCli;
    const cita:CitasInterfaces = req.body;
    const conn = await connect();
    await conn.query('UPDATE citas set ? WHERE IdC = ?', [cita, id])
    return res.json({
        message: "Cita actualizada"
    });
}