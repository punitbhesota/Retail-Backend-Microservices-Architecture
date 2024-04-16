import knex from 'knex';

let knexClient;

function createClient(
    dbUser,
    dbPass,
    dbHost,
    dbPort,
    dbName,
    migrationsDirectory
){
    const conn = `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
    knexClient = knex({
        client: 'pg',
        debug: false,
        connection: conn,
        acquireConnectionTimeout: 60000,
        migrations: {
            directory: migrationsDirectory || './migrations',
        },
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

async function runMigrations() {
    console.log('Database: executing migrations...');
    await knexClient.migrate.latest();
    console.log('Database: migrations complete');
}


export async function initDb() {
    try {
    // Create the knex client and connection pool.
    const MIGRATIONS_FOLDER = './db-migrations';
    console.log('HERE', MIGRATIONS_FOLDER)
    createClient('root', 'root', 'localhost', '8888', 'microservice_poc_db', './db-migrations');

    // If the connection fails, an error is thrown and the service will not start.
    await testConnection();

    // Run any new migrations.
    await runMigrations();
    } catch (error) {
        console.log(error)
    }  
}
