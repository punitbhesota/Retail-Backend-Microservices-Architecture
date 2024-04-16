import express from 'express'
import cors from 'cors'
import {initDb} from './db.js'

const app = express()

app.use(cors())
app.use(express.json())

async function init() {
    try {
        await initDb();

        app.listen(3500,()=>{
            console.log(`db migrations service running on PORT: 3500`)
        });
    } catch (err) {   
        console.error(err);
    }
}

init();