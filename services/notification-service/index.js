const express = require('express');
const cors = require('cors');


const app = express()

app.use(cors())
app.use(express.json())

app.listen(4200,()=>{
    console.log(`notification-service running on PORT: 4200`)
});