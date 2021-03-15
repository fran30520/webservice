import {createPool} from "mysql2";

export async function connect() {

    const connection = await createPool({

        host: 'localhost',
        user: 'root',
        password: 'secret',
        database: 'jumelco',
        connectionLimit: 10

    });
    return connection;
}