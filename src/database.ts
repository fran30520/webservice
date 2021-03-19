import {createPool} from "mysql2";

export async function connect() {

    const connection = await createPool({

        host: 'localhost',
        user: 'root',
        password: 'secret',
        database: 'jumelco',
        connectionLimit: 100,
        port:3000

    });

    return connection;
}