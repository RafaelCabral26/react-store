import React, { useEffect } from "react";
import { Card, Label  } from "flowbite-react";
import http from "../services/axios"
export function UserLogin() {
  const [registerModal, setRegisterModal] = React.useState(false)
  const [userData, setData] = React.useState({
    nome:"",
    cpf:"",
    email:"",
    password:"",
    telefone:"",
    data_nasc:"",
  })

function submitLogin() {
    let dataLogin = JSON.stringify({email:userData.email, password:userData.password})
    http.post("/login",dataLogin).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
}
  function handleModal() {
    setRegisterModal(!registerModal)
  }
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
        <div className="max-w-sm m-auto ">
        
  {registerModal ? 
  <div className="flex justify-center " >
     <form  className="bg-white flex flex-col border-2 rounded-xl my-20 w-96 shadow-2xl relative" >
  <div className="flex flex-col m-auto p-10" >
    <h1 className="self-center text-slate-500 text-3xl">Cadastro</h1>
    <hr/>

    <label className="m-1" htmlFor="nome">Nome</label>
    <input className="input-field" type="text" placeholder="Nome" name="nome" id="nome"  onChange={handleData} autoFocus required/>

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


    

    <button type="submit" className=" m-4 p-2 btn-field" onClick={submitUserData}>Cadastrar</button>
  </div>
  <div className="m-2 text-slate-400 text-sm ">
    <p>Já tem uma conta? <a href="" className="underline text-teal-300  rounded-lg p-1">Login</a>.</p>
  </div>
  <a className="absolute top-4 right-4 text-slate-400" href={"/"}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>
    </a>
</form> 

  </div> 
  
  : 
  
  <Card className="p-10 shadow-xl mt-52 my-4 relative border-2">
          <form className="flex flex-col">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Seu Email"
                />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email@email"
                className="input-field border-2"
                required={true}
                onChange={handleData}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Sua Senha"
                />
              </div>
              <input
                id="password"
                type="password"
                name="password"
                className="input-field border-2"
                required={true}
                onChange={handleData}
              />
            </div>
         
            <button onClick={submitLogin} type="submit" className="my-2 py-2 btn-field">
              Entrar
            </button>
          </form>
            <div className="m-2 text-slate-400 text-sm ">
    <p>Não está Cadastrado? <button className="underline text-teal-300  rounded-lg p-1" onClick={handleModal}>Cadastre-se</button>.</p>
    <a className="absolute top-4 right-4" href={"/"}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>
    </a>
  </div>
        </Card>}
      </div>
    )
}