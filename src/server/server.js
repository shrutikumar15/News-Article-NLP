// Declaring Global Variables
const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const port = '5001'

const mockAPi = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}


// Creating an express object
const app = express()


const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cors())


app.use(express.static('dist'))

// Intializing the server
const server = app.listen(port, function(){
    console.log("Server up and running at port ",port)
})

app.get('/',function(req, res){
    res.sendFile('index.html')
})




app.post('/address', acquireData)

function acquireData(req, res){
    console.log('Inside Fetch ')
    const AYLIENTextAPI = require('aylien_textapi');
    console.log(process.env.API_ID)
    console.log(process.env.API_KEY)
    const textapi = new AYLIENTextAPI({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });

  
    textapi.sentiment({
        url: req.body.text
    }, function(error, response) {
        if (error === null) {
            console.log( response, error)
                      
            res.send(response)
            console.log('response sent')
        }
        else{
            console.log(req.body.text)
            console.log(error)
            console.log("here")
        }
    });
}

app.post('/test', function(req, res){
    res.send(mockAPi)
})