import React from "react";
import { Sidebar } from "flowbite-react";
export function AdminSidebar(props) {

    return (
        <Sidebar className="col-span-2 relative ">
          <Sidebar.Items className="h-full">
            <Sidebar.ItemGroup className="">
              <Sidebar.Collapse label="Produtos" className="justify-center btn-field my-2">
                <button className="btn btn-primary rounded-md my-1 w-full " onClick={() => props.setCrudPages("create")}>
                  Criar
                </button>
                <button className="btn btn-primary rounded-md my-1 w-full" onClick={() => props.setCrudPages("list")}>
                  Listar
                </button>
              </Sidebar.Collapse>
              <Sidebar.Collapse label="Clientes" className="justify-center btn-field my-2"></Sidebar.Collapse>
              <Sidebar.Collapse label="Pedidos" className="justify-center btn-field my-2"></Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
    )
}