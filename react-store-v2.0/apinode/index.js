const connect = require("./service/mongo")
require("dotenv").config()
const express= require("express")
const cors = require("cors")
const app = express()
const router = express.Router()
const routes = require("./routes/Routes")
//DB
connect()
//Express Configuraçao
app.use(cors())
app.use(express.json())
app.use(router)
//Express Rotas
app.use(routes)

//Port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Escutando porta 3000`)
})