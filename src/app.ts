import express, {Application} from 'express';
import morgan from 'morgan';

const app = express();


export class App {

    private app: Application;

    constructor(private port?: number | string) {

        this.app = express();
        this.settings();
        this.middelwares();
    }

    settings() {

        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    middelwares() {
        this.app.use(morgan('dev'))
    }

    async listen() {
        await app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'))
    }

}