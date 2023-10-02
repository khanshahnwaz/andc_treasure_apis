const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser=require('body-parser')
// Middleware to send post request
// app.use(express.json())
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.get('/', (req, res) => {
    try{
    return res.status(200).json({"Message":"Please route to correct page.Have a Good Day"})
    }
    catch(err){
        return res.json(err)
    }
    // console.log(req.socket.remoteAddress)
})
app.listen(3001, () => {
    console.log('Listening at Localhost:3001')
})
module.exports=app;