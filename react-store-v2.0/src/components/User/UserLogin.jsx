import React from "react";
import http from "../../services/axios";
import { Card,Label } from "flowbite-react";
export function UserLogin({ userData, handleData, handleModal }) {
  
    function submitLogin(e) {
        e.preventDefault()  
        let dataLogin = JSON.stringify({email:userData.email, password:userData.password})
        console.log(dataLogin)
          http.post("/login",dataLogin).then(res => {
            console.log(res.data)
          }).catch(err => {
            console.log(err)
          })
      }
  
  
  
    return (
    <Card className="p-10 shadow-xl mt-52 my-4 relative border-2">
      <form className="flex flex-col">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Seu Email" />
          </div>
          <input id="email" type="email" name="email" placeholder="email@email" className="input-field border-2" required={true} onChange={handleData} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Sua Senha" />
          </div>
          <input id="password" type="password" name="password" className="input-field border-2" required={true} onChange={handleData} />
        </div>

        <button onClick={submitLogin} type="submit" className="my-2 py-2 btn-field">
          Entrar
        </button>
      </form>
      <div className="m-2 text-slate-400 text-sm ">
        <p>
          Não está Cadastrado?{" "}
          <button className="underline text-teal-300  rounded-lg p-1" onClick={handleModal}>
            Cadastre-se
          </button>
          .
        </p>
        <a className="absolute top-4 right-4" href={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </a>
      </div>
    </Card>
  );
}
