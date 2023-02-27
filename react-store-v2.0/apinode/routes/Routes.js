const router = require("express").Router()
const userRoutes = require("./UserRoutes")
const productRoutes = require("./ProductRoutes")
const routes = router.use(userRoutes, productRoutes)
module.exports = routes
