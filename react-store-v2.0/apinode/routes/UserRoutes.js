const UserModel = require("../models/UserModel")
const router = require("express").Router()
const userController = require("../controller/UserController")
router.post("/register", async function (req,res){
    try {
        const user = userController.mountUser(req)
        userController.validateUser(user)
        userController.verifyUserExist(user.email);
        await UserModel.create(user)
        return res.status(200).json({message:"Cadastro efetuado!"})
    }catch(err) {
        return res.status(500).json({error:err})
    }
        
})
router.post("/login", async function(req,res) {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email:email})
        if(!user) {
            res.status(401).json({error:"Usuario inexistente"})
        }
        return res.status(200).json({message:"Usuario Logado", perfil:user.perfil})
    }catch(err) {
        return res.status(500).json({error:err,message:"Erro ao fazer login"})
    }
})
module.exports = router