import {Application, Request,Response, NextFunction} from 'express';
const express = require('express')
import morgan from 'morgan';

//Routes
import IndexRoutes from './routes/index.routes'
import clientesRouters from "./routes/clientes.routes";
import serviciosRouters from "./routes/servicios.routes";
import citasRouters from "./routes/citas.routes";
import loginRouters from "./routes/auth.routes";
import bodyParser = require("body-parser");


export class App {

    private app: Application;

    constructor(private port?: number | string) {

        this.app = express();
        this.settings();
        this.middelwares();
        this.routes();
    }

    settings() {

        this.app.set('port', this.port || process.env.PORT || 3200)
    }

    middelwares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(function(req:Request,res:Response,next:NextFunction){
            next();
        });
    }
    routes(){
        this.app.use(IndexRoutes)
        this.app.use("/clientes",clientesRouters)
        this.app.use("/servicios",serviciosRouters)
        this.app.use("/citas",citasRouters)
        this.app.use('/login',loginRouters)
        //this.app.use("/login",loginRouters)
        /*this.app.post('/login',(req:Request,res:Response)=>{
            console.log(req.body);
            res.send("HOLA");
        })*/

    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'))
    }

}