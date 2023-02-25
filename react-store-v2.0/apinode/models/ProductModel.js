const mongoose = require("mongoose");
const {Schema} = mongoose

const ProductModel  = new Schema({
    name:String,
    price:{
        type:String,
        required:true,
    },
    group:String,
    description:String,
})