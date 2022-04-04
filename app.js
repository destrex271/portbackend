require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const cookie_parser = require('cookie-parser')
var count = 0

app.listen(process.env.PORT || 3000, () => {console.log("Connected")});

app.use(cors())
app.use(cookie_parser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/count', (req, res) =>{
    res.cookie('count', count++).send("set")
})
