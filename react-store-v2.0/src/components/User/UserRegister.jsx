import React from "react";
import http from "../../services/axios";
export function UserRegister({ userData,handleData }) {
  const submitUserData = (e) => {
    e.preventDefault();
    if (document.getElementById("password").value != document.getElementById("confirm-password").value) {
      alert("Senhas digitadas incompatíveis!");
    }
    const user = JSON.stringify(userData);
    http
      .post("/register", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center">
      <form className="bg-white flex flex-col border-2 rounded-xl my-20 w-96 shadow-2xl relative">
        <div className="flex flex-col m-auto p-10">
          <h1 className="self-center text-slate-500 text-3xl">Cadastro</h1>
          <hr />

          <label className="m-1" htmlFor="name">
            Nome
          </label>
          <input className="input-field" type="text" placeholder="Nome" name="name" id="name" onChange={handleData} autoFocus required />

          <label className="m-1" htmlFor="email">
            Email
          </label>
          <input className="input-field" type="text" placeholder="email@email.com" name="email" id="email" onChange={handleData} required />

          <label className="m-1" htmlFor="password">
            Senha
          </label>
          <input className="input-field" type="password" placeholder="********" name="password" id="password" onChange={handleData} required />

          <label className="m-1" htmlFor="confirm-password">
            Confirmar Senha
          </label>
          <input className="input-field" type="password" placeholder="********" name="confirm-password" id="confirm-password" required />

          <label className="m-1" htmlFor="data_nasc">
            Data de Nascimento
          </label>
          <input className="input-field" type="date" name="data_nasc" id="data_nasc" onChange={handleData} required />

          <label className="m-1" htmlFor="cpf">
            CPF
          </label>
          <input className="input-field " type="number" name="cpf" id="cpf" onChange={handleData} required />

          <label className="m-1" htmlFor="telefone">
            Telefone
          </label>
          <input className="input-field  " type="number" name="telefone" id="telefone" onChange={handleData} required />

          <button type="submit" className=" m-4 p-2 btn-field" onClick={submitUserData}>
            Cadastrar
          </button>
        </div>
        <div className="m-2 text-slate-400 text-sm ">
          <p>
            Já tem uma conta?{" "}
            <a href="" className="underline text-teal-300  rounded-lg p-1">
              Login
            </a>
            .
          </p>
        </div>
        <a className="absolute top-4 right-4 text-slate-400" href={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </a>
      </form>
    </div>
  );
}
