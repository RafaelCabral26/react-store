const mongoose = require("mongoose");
const {Schema} = mongoose

const ProductSchema  = new Schema({
    name:{
        type:String,
        required:[true, "Insira um nome para o produto!"]
    },
    price:{
        type:String,
        required:[true, "Insira um preço para o produto!"]
    },
    group:String,
    description:String,
    photo:String,
})

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel