import React from "react";
import http from '../services/axios'
export function UserRegister() {
const [userData, setData] = React.useState({
    nome:"",
    cpf:"",
    email:"",
    password:"",
    telefone:"",
    data_nasc:"",
})
const handleData = (e) => {
const name = e.target.name
const value = e.target.value
setData((previousData) => {
    return { ...previousData, [name]:value}
})

}
const submitUserData = (e) => {
    e.preventDefault()
    if(document.getElementById("password").value != document.getElementById("confirm-password").value) {
        alert("Senhas digitadas incompatíveis!")
    }
    const user = JSON.stringify(userData)
    http.post("/create_client/", user)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err)
    })
}

return ( 
  <div className="flex justify-center">
     <form  className=" my-52  flex flex-col border-2 rounded-xl bg-blue-100" >
  <div className="flex flex-col m-auto p-10">
    <h1>Cadastro</h1>
    <hr/>

    <label htmlFor="nome">Nome</label>
    <input type="text" placeholder="Nome" name="nome" id="nome"  onChange={handleData} required/>

    <label htmlFor="email">Email</label>
    <input type="text" placeholder="email@email.com" name="email" id="email"  onChange={handleData} required/>

    <label htmlFor="password">Senha</label>
    <input type="password" placeholder="********" name="password" id="password"  onChange={handleData}  required/>

    <label htmlFor="confirm-password">Confirmar Senha</label>
    <input type="password" placeholder="********" name="confirm-password" id="confirm-password" required/>
    <hr/>
    <label htmlFor="data_nasc">Data de Nascimento</label>
    <input type="date" name="data_nasc" id="data_nasc" onChange={handleData} required/>
    <hr/>

    <label htmlFor="cpf">CPF</label>
    <input type="number" name="cpf" id="cpf"  onChange={handleData} required/>
    <hr/>

    <label htmlFor="telefone">Telefone</label>
    <input type="number" name="telefone" id="telefone"  onChange={handleData} required/>
    <hr/>

    

    

    <button type="submit" className=" m-2 border-2 border-slate-700 rounded-lg" onClick={submitUserData}>Cadastrar</button>
  </div>
  <div className="">
    <p>Já tem uma conta? <a href="" className="border-2 line border-slate-500 rounded-lg px-1">Login</a>.</p>
  </div>
</form> 

  </div>
)

}