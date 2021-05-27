import {Request, Response} from 'express'
import {connect} from "../database";
import {CitasInterfaces} from "../interfaces/citas.interfaces"
import {ServiciosInterfaces} from "../interfaces/servicios.interfaces";


export async function getCitas(req: Request, res: Response) {
    const conn = await connect();
    conn.query('select * from citas', (err, rows) => {
        return res.json(rows)
    })

};

export async function createCita(req: Request, res: Response) {

    const newcita: CitasInterfaces = {

        IdC: req.body.IdC,
        idCliC: req.body.idCliC,
        fecha: req.body.fecha,
        observaciones: req.body.observaciones

    };
    const conn = await connect();
    conn.query("INSERT INTO citas SET ?", [newcita], function (err, result) {
        if (err) {
            console.log(JSON.stringify(err))
            return res.status(500).json(err)
        }
        // @ts-ignore
        console.log(result.insertId)
        // @ts-ignore
        conn.query('SELECT * FROM citas WHERE IdC = ?', [result.insertId], (err, rows) => {
            // @ts-ignore
            console.log(rows[0])

            // @ts-ignore
            return res.json(rows[0]);
        });


    });
}

export async function getCita(req: Request, res: Response) {
    const id = req.params.IdC;
    const conn = await connect();
    conn.query('SELECT * FROM citas where IdC =?', [id], (err, rows) => {
            return res.json(rows);
        }
    );
}

export async function deleteCita(req: Request, res: Response): Promise<Response> {
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
    const consulta = conn.query('update citas set ? where idC = ?', [cita, id])
    console.log(consulta);
    return res.json(consulta);

}