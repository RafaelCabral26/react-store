import React, { useEffect } from "react";
import { UserLogin } from "../components/User/UserLogin";
import { UserRegister } from "../components/User/UserRegister";
export function UserPage() {
  const [registerModal, setRegisterModal] = React.useState(false);
  const [userData, setData] = React.useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
    telefone: "",
    data_nasc: "",
    photo: "",
  });

  function handleModal() {
    setRegisterModal(!registerModal);
  }
  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((previousData) => {
      return { ...previousData, [name]: value };
    });
  };


  return (
    <div className="max-w-sm m-auto ">
      {!registerModal ? (
        <UserLogin userData={userData} handleData={handleData} handleModal={handleModal}></UserLogin>
        
      ) : (
        <UserRegister userData={userData} handleData={handleData}></UserRegister>
      )}
    </div>
  );
}
