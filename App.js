const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

const app = express()

const routes = require('./router')

app.use(cors({origin: '*'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(routes)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})