import knex from 'knex'

export let knexClient;

function createClient(
    dbUser,
    dbPass,
    dbHost,
    dbPort,
    dbName
){
    const conn = `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
    knexClient = knex({
        client: 'pg',
        debug: false,
        connection: conn,
        acquireConnectionTimeout: 60000,
        pool: {
            min: 0,
            max: 30,
            acquireTimeoutMillis: 60000,
        }
    });
}

async function testConnection() {
    try {
        await knexClient.raw('SELECT 1;');
        console.log('Database: connection established successfully');
    } catch (err) {
        console.log('Database: connection failed');
        throw err;
    }
}

export async function initDb() {
    try {
    createClient('root', 'root', 'localhost', '8888', 'microservice_poc_db');

    // If the connection fails, an error is thrown and the service will not start.
    await testConnection();  
}
    catch (error) {
        console.log(error)
    }  
}
