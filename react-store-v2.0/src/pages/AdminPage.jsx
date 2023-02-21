import React, { useEffect } from "react";
import NavBar from "../components/Navbar";
import http from "../services/axios";
import { Sidebar, Breadcrumb } from "flowbite-react";
import BreadcrumbItem from "flowbite-react/lib/esm/components/Breadcrumb/BreadcrumbItem";
export function AdminPage() {
  const [crudPages, setCrudPages] = React.useState("create");
  const [editProductsModal, setEditProductsModal] = React.useState(false)
  const [listOfProducts, setListOfProducts] = React.useState([]);
  const [productState, setProductState] = React.useState({
    name: "",
    price: "",
    description: "",
    group: "",
    photo: "url",
  });
  const handleProductData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductState((previousData) => {
      console.log(name, value);
      return { ...previousData, [name]: value };
    });
  };
  function submitProductData(e) {
    e.preventDefault();
    const newProduct = JSON.stringify(productState);
    console.log(newProduct);
    http
      .post("/create_product/", newProduct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    http
      .get("/products_list")
      .then((res) => {
        console.log(res.data);
        setListOfProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleEditProductsModal(e, id) {
    setEditProductsModal(!editProductsModal)
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className="grid grid-cols-12 mx-auto border container">
        <Sidebar className="col-span-2 ">
          <Sidebar.Items className="h-full">
            <Sidebar.ItemGroup className="">
              <Sidebar.Collapse label="Produtos" className="justify-center btn-field my-2">
                <button className="btn btn-primary rounded-md my-1 w-full " onClick={() => setCrudPages("create")}>
                  Criar
                </button>
                <button className="btn btn-primary rounded-md my-1 w-full" onClick={() => setCrudPages("list")}>
                  Listar
                </button>
              </Sidebar.Collapse>
              <Sidebar.Collapse label="Clientes" className="justify-center btn-field my-2"></Sidebar.Collapse>
              <Sidebar.Collapse label="Pedidos" className="justify-center btn-field my-2"></Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        {crudPages == "create" ? (
          <form className="my-28 col-start-5 col-span-5 border-2 rounded-lg mx-auto p-6 shadow-2xl">
            <Breadcrumb className="my-2 text-slate-500">
              Produtos
              <Breadcrumb.Item>
                <span className="text-base"> Criar</span>
              </Breadcrumb.Item>
            </Breadcrumb>
            <select className="select select-bordered w-full max-w-xs" defaultValue={"group"} name="group" onChange={handleProductData}>
              <option disabled value={"group"}>
                Categorias
              </option>
              <option name="group" value="eletronicos">
                Eletrônicos
              </option>
              <option name="group" value="roupas">
                Roupas
              </option>
            </select>
            <div className="form-control m-0 w-full max-w-xs">
              <label className="label">
                <span className="label-text">Nome do produto</span>
              </label>
              <input type="text" placeholder="Nome..." name="name" className="input input-bordered w-full max-w-xs" onChange={handleProductData} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Preço</span>
              </label>
              <label className="label input-group">
                <input type="number" min="0.00" max="10000.00" step="0.01" placeholder="Preço..." name="price" className="input input-bordered w-full max-w-xs" onChange={handleProductData} />
                <span>R$</span>
              </label>
            </div>
            <textarea placeholder="Descrição do Produto" name="description" className="textarea textarea-bordered textarea-md my-4  w-full max-w-xs" onChange={handleProductData}></textarea>
            <div className="form-control m-0 w-full max-w-xs">
              <button type="submit" className="btn btn-primary" onClick={submitProductData}>
                Criar Produto
              </button>
            </div>
          </form>
        ) : crudPages == "list" ? (
          <div className="col-start-5 my-20 border">
            <table className="table w-full h- m-auto">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Categoria</th>
                  <th>Preço</th>
                  <th>Descrição</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listOfProducts.map((e) => {
                  return (
                    <tr key={e.name}>
                      <th key={e.name}>{e.name}</th>
                      <th key={e.group}>{e.group}</th>
                      <th key={e.price}>{e.price}</th>
                      <th key={e.description}>{e.description}</th>
                      <th key={(e.name +"1")}><button className="link text-teal-400">Editar</button></th>
                      {console.log(e._id.$oid)}
                    </tr>
                  );
                })}
               
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
}
