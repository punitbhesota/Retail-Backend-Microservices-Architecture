import { createClient, testConnection } from '@instacoach/ic-db-utils/dist/client.js';
import { runMigrations } from '@instacoach/ic-db-utils/dist/migrate.js';

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
