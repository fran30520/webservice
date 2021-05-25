import { Request, Response} from 'express';
import {connect} from "../database";
export async function login(req:Request,res:Response){
    console.log(JSON.stringify(req.body));
    const email = req.body.email;
    const password = req.body.contrasena;
    const conn = await connect();
    conn.query('SELECT * FROM clientes where email=? and contrasena=?' , [email,password],(err,rows)=>{
        // @ts-ignore
        const user = rows[0];
        if (user!=null){
            res.json(user)
        }
        else{
           res.status(401).json({
               error:"Usuario o contraseña incorrectos"
           })
        }

    });
}