import {App} from "./app";

async function main(){

    const app= new App(3200);
    await app.listen();

}

main();