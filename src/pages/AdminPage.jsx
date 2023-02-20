import React from "react";
import NavBar from "../components/Navbar";
export function AdminPage() {



    const [userData, setData] = React.useState({
        name:"",
        price:"",
        description:"",
        discount:"",
        photo:"",
        group:"",
    })

    const handleData = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData((previousData) => {
            return { ...previousData, [name]:value}
        })
        

    const submitProductData = (e) => {
        e.preventDefault()
        const prod = JSON.stringify(prodData)
        http.post("/create_client/", user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (
        <div>
            <NavBar></NavBar>
            <div className="grid grid-flow-col grid-cols-9 my-12 sm:my-56 border-2 ">
                <div className="m-auto flex flex-col w-24 col-start-4 w-56 border">
                    <button className="my-2 btn-field">Teste</button>
                    <button className="my-2 btn-field">Teste</button>
                    <button className="my-2 btn-field">Teste</button>
                    <button className="my-2 btn-field">Teste</button>
                    <button className="my-2 btn-field">Teste</button>
                </div>
                <div className="col-start-6 border w-96 h-96">
                    Load page
                </div>
            </div>
        </div>
    )
}