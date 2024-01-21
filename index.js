import express from 'express';

const app = express();
const port = 9000;



app.use('/', (req,res)=>{
    res.send('Home PAGE :"')
})


app.listen(port, ()=>{
    console.log('run on port ' + port);
})



