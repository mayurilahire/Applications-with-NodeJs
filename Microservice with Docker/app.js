import express from 'express';
import request from 'request';
const app = express();
const port = process.env.port || 5600;

const weatherUrl = "https://api.github.com/search/repositories?q=";

app.get('/',(req, res) => {
    res.send('Git Api running')
})

app.get('/git', (req,res) => {
    const uname = req.query.uname;
    request.get( `${weatherUrl}${uname}`, {headers:{'user-agent': 'node.js'}} , (err,response,body)=>{
        if(err){
            res.status(404).send('no data found')
        }else{
            // console.log(response)
            //console.log(body)
            //const output = JSON.parse(body)
            res.send(body)
        }
    })
})

app.listen(port, (err) => {
    console.log(`App running on port ${port}`)
})