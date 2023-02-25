const router = require("express").Router()
const userRoutes = require("./UserRoutes")

export const routes = router.use(userRoutes)
