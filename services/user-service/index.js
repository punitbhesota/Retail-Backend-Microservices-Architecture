import express from 'express'
import cors from 'cors'
import {initDb, knexClient} from './db.js'
// import knex from 'knex'

const app = express()

app.use(cors())
app.use(express.json())


app.get("/users",async(req,res)=>{
    try {
        let users = await knexClient.raw('SELECT * FROM users',{})
        let data = users.rows
        return res.json({data})
    } catch (error) {
        console.log(error)
    }
    
})

async function init() {
    try {
        await initDb();

        app.listen(4100,()=>{
            console.log(`user-service running on PORT: 4100`)
        });
    } catch (err) {   
        console.error(err);
    }
}

init();