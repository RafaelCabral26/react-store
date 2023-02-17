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
     <form  className=" flex flex-col border-2 rounded-xl my-20 w-96 shadow-2xl" >
  <div className="flex flex-col m-auto p-10">
    <h1 className="self-center text-slate-500 text-3xl">Cadastro</h1>
    <hr/>

    <label className="m-1" htmlFor="nome">Nome</label>
    <input className="input-field" type="text" placeholder="Nome" name="nome" id="nome"  onChange={handleData} required/>

    <label className="m-1" htmlFor="email">Email</label>
    <input className="input-field" type="text" placeholder="email@email.com" name="email" id="email"  onChange={handleData} required/>

    <label className="m-1" htmlFor="password">Senha</label>
    <input className="input-field" type="password" placeholder="********" name="password" id="password"  onChange={handleData}  required/>

    <label className="m-1" htmlFor="confirm-password">Confirmar Senha</label>
    <input className="input-field" type="password" placeholder="********" name="confirm-password" id="confirm-password" required/>
    
    <label className="m-1" htmlFor="data_nasc">Data de Nascimento</label>
    <input className="input-field" type="date" name="data_nasc" id="data_nasc" onChange={handleData} required/>

    <label className="m-1" htmlFor="cpf">CPF</label>
    <input className="input-field " type="number" name="cpf" id="cpf"  onChange={handleData} required/>

    <label className="m-1" htmlFor="telefone">Telefone</label>
    <input className="input-field  "type="number" name="telefone" id="telefone"  onChange={handleData} required/>


    

    <button type="submit" className=" m-4 p-2 border-2 border-slate-200 text-slate-500 rounded-lg transition ease-linear hover:bg-teal-300 hover:scale-110 hover:shadow-lg" onClick={submitUserData}>Cadastrar</button>
  </div>
  <div className="m-2 text-slate-400 text-sm ">
    <p>Já tem uma conta? <a href="" className="underline text-teal-300  rounded-lg p-1">Login</a>.</p>
  </div>
</form> 

  </div>
)

}