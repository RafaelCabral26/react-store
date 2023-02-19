import React from "react";
import NavBar from "../components/Navbar";
export function AdminPage() {


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