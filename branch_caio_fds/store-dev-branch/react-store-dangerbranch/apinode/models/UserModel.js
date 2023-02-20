const mongoose = require("mongoose");
const {Schema} = mongoose

const UserSchema = new Schema({
    nome: String,
    cpf: String,
    email: {
        type: String,
        unique: true,
        required:true,
    },
    password: String,
    telefone: String,
    data_nasc: String,
 
    perfil: {
        type:Number,
        default:1 //0 = admin, 1 = usuario
    },
    ative: {
        type:Boolean,
        default:true
    }
});
const UserModel = mongoose.model("User", UserSchema)
module.exports = UserModel;