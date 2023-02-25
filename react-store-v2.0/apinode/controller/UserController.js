import UserModel from "../models/UserModel";
const { body, validationResult } = require("express-validator")
export function mountUser(req){
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

export async function verifyUserExist(email) {
    let user = await UserModel.exists({ email: email });
    if (user) {
        throw new Error('Error ao cadastrar ou usuário já cadastrado!');
    }
}
export function validateUser(user) {
    body(user.email).isEmail().trim().withMessage("Email inválido")
    body(user.password).isLength({min:6}).trim().withMessage("Senha deve conter no mínimo seis caracteres")
}