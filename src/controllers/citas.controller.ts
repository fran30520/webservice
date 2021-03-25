import {Request,Response} from 'express'
import {connect} from "../database";
import {CitasInterfaces} from "../interfaces/citas.interfaces"



export async function getCitas(req: Request, res: Response){
    const conn = await connect();
    conn.query('select * from citas',(err,rows)=>{
        return res.json(rows)
    })

};

export async function createCita(req: Request, res: Response):Promise<Response> {
    const newcita: CitasInterfaces = req.body;
    const conn = await connect();
    conn.query("INSERT INTO citas SET ?",[newcita]);

    return res.json({
        message: "nueva cita creada"
    });
}

export async function getCita(req: Request, res: Response) {
    const id = req.params.IdC;
    const conn = await connect();
    conn.query('SELECT * FROM citas WHERE IdC = ?', [id],(err,rows)=> {
            return res.json(rows);}
    );
}

export async function deleteCita(req: Request, res: Response):Promise<Response> {
    const id = req.params.IdC;
    const conn = await connect();
    conn.query('DELETE FROM citas WHERE IdC = ?', [id])
    return res.json({
        message: "cita borrada"
    })
}

export async function updateCita(req: Request, res: Response) {
    const id = req.params.idC;
    const cita: CitasInterfaces = req.body;
    const conn = await connect();
    const consulta = conn.query('update citas set ? where idC = ?',[cita,id])
    console.log(consulta);
    return res.json(consulta);

}