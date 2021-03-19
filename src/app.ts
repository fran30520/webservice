import express, {Application, urlencoded} from 'express';
import morgan from 'morgan';

//Routes
import IndexRoutes from './routes/index.routes'
import clientesRouters from "./routes/clientes.routes";
import serviciosRouters from "./routes/servicios.routes"
import citasRouters from "./routes/citas.routes"


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
    }
    routes(){
        this.app.use(IndexRoutes)
        this.app.use("/clientes",clientesRouters)
        this.app.use("/servicios",serviciosRouters)
        this.app.use("/citas",citasRouters)

    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'))
    }

}