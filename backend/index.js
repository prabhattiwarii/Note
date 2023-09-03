const connectToMongo = require ('./database/db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 4000;


//middleware
app.use(cors())
app.use(express.json())
//routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port,()=>{
    console.log(`App Listen at http://localhost:${port}`);
})