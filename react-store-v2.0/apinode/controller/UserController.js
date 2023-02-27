const UserModel = require("../models/UserModel")
const { body, validationResult } = require("express-validator")
function mountUser(req){
    const {
        name,
        photo,
        cpf,
        email,
        password,
        telefone,
        data_nasc,
    } = req.body;
    const user = {
        name,
        photo,
        cpf,
        email,
        password,
        telefone,
        data_nasc,
    }
    return user
}

async function verifyUserExist(email) {
    let user = await UserModel.exists({ email: email });
    if (user) {
        throw new Error('Error ao cadastrar ou usuário já cadastrado!');
    }
}
function validateUser(user) {
    body(user.email).isEmail().trim().withMessage("Email inválido")
    body(user.password).isLength({min:6}).trim().withMessage("Senha deve conter no mínimo seis caracteres")
}
module.exports = { mountUser,validateUser,verifyUserExist}