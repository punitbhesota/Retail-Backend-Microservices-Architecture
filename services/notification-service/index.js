import express from 'express'
import cors from 'cors'
import {initDb} from './db.js'
import axios from 'axios'

const app = express()

app.use(cors())
app.use(express.json());

let user_service = 'http://localhost:4100';
let getUsers = `${user_service}/users`

app.get("/notifications",async(req,res)=>{
    try {        
        let data = await axios.get('http://localhost:4100/users');
        let user_data = data.data
        return res.json({user_data})
    } catch (error) {
        console.log(error)
    }
    
})

async function init() {
    try {
        await initDb();

        app.listen(4200,()=>{
            console.log(`notification-service running on PORT: 4200`)
        });
    } catch (err) {   
        console.error(err);
    }
}

init();