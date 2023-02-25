import React from "react";
import NavBar from "../components/Navbar";
import { TableOfProducts } from "../components/Products/TableOfProducts";
import { CreateProductsForm } from "../components/Products/CreateProductsForm";
import { AdminSidebar } from "../components/Admin/AdminSidebar";
export function AdminPage() {
  const [crudPages, setCrudPages] = React.useState("create");

  return (
    <div className="">
      <NavBar></NavBar>
      <div className="grid grid-cols-12 mx-auto border container relative">
        <AdminSidebar setCrudPages={setCrudPages}></AdminSidebar>
        {crudPages == "create" ? (
         <CreateProductsForm></CreateProductsForm>
        ) : crudPages == "list" ? (
          <TableOfProducts></TableOfProducts>
        ) : null}
        
      </div>
    </div>
  );
}
