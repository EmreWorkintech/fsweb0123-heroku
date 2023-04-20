//console.log(process.argv);
//const fooValue = process.argv[3];
//console.log(fooValue);

//console.log(process.env.USER);
require('dotenv').config();

const express = require('express');
const server = express();

const port = process.env.PORT || 9000;
console.log(process.env.PORT);


server.use(express.json());

server.get('/hello', (req,res)=>{
    res.json('hello from my PoC app!...')

})

server.listen(port, ()=> {
    console.log(`Server runnuning on port ${port}`);
})