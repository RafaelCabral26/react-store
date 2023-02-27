const ProductModel = require("../models/ProductModel")
const router = require("express").Router()
const ProductController = require("../controller/ProductController")
router.get("/products_list", async function (req,res) { 
try {

    const products = await ProductModel.find()
    return res.status(200).json(products)
}catch(err) {
    console.log(err)
    return res.status(401).json({error:err, msg:"Erro ao listar produtos"})
}
})

router.post("/create_product", async function(req,res) {
    try {

        const product = ProductController.mountProduct(req.body)
        await ProductModel.create(product)
        return res.status(200)
    }catch(err) {
        console.log(err)
        return res.status(401).json({error:err, msg:"Erro ao criar produto"})
    }
})





module.exports = router