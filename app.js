const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000

app.get('/',(req, res)=>{
    res.send("AWS lambda function available to test. http://localhost:3000/say?keyword=hello")
})

app.get('/say', (req,res) => {
    axios.get(`https://<YOUR_API_ID>.execute-api.us-east-1.amazonaws.com/test/say?keyword=${req.query.keyword}`)
    .then(result => {
        res.status(200)
        res.send(result.data)
    })
    .catch(err => {
        res.status(400)
        res.send(err)
    })
})

app.listen(port, () => {
    console.log('API listening on port',port)
})