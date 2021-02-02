const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express()

const routes = require('./router')

app.use(cors({origin: '*'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})