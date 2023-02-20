import React from "react";
import NavBar from "../components/Navbar";
import http from "../services/axios";
export function AdminPage() {
  const [crudPages, setCrudPages] = React.useState("create");
  const [productState, setProductState] = React.useState({
    nome: "",
    preco: "",
    descricao: "",
    categoria: "",
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
    e.preventDefault()
    const newProduct = JSON.stringify(productState);
    console.log(newProduct);
    http.post("/create_product/", newProduct)
    .then(res => {
        console.log(res.data)
    }).catch(err => {console.log(err);})
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className=" grid grid-cols-12 mx-auto border">
        <aside className="flex h-screen w-40 border-r-2 dropdown">
          <div className="menu w-full my-10">
            {/* <button className="btn btn-primary rounded-md my-1" onClick={() => setCrudPages("create")}>
              Criar
            </button> */}
            <div className="group-focus:">
              <button className="btn btn-primary rounded-md my-1 group">Produtos</button> 
              <div className="hidden group-focus:block">Teste1</div>
              <div className="hidden focus:block">Teste2</div>
            </div>
            <button className="btn btn-primary rounded-md my-1" onClick={() => setCrudPages("update")}>
              Atualizar
            </button>
            <button className="btn btn-primary rounded-md my-1" onClick={() => setCrudPages("delete")}>
              Deletar
            </button>
          </div>
        </aside>
        {crudPages == "create" ? (
          <form className="my-28 col-start-6 col-span-5 ml-4">
            <select className="select select-bordered w-full max-w-xs" defaultValue={"categoria"} name="categoria" onChange={handleProductData}>
              <option disabled value={"categoria"}>
                Categorias
              </option>
              <option name="categoria" value="eletronicos">
                Eletrônicos
              </option>
              <option name="categoria" value="roupas">
                Roupas
              </option>
            </select>
            <div className="form-control m-0 w-full max-w-xs">
              <label className="label">
                <span className="label-text">Nome do produto</span>
              </label>
              <input type="text" placeholder="Nome..." name="nome" className="input input-bordered w-full max-w-xs" onChange={handleProductData} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Preço</span>
              </label>
              <label className="label input-group">
                <input type="number" min="0.00" max="10000.00" step="0.01" placeholder="Preço..." name="preco" className="input input-bordered w-full max-w-xs" onChange={handleProductData} />
                <span>R$</span>
              </label>
            </div>
            <textarea placeholder="Descrição do Produto" name="descricao" className="textarea textarea-bordered textarea-md my-4  w-full max-w-xs" onChange={handleProductData}></textarea>
            <div className="form-control m-0 w-full max-w-xs">
            <button type="submit" className="btn btn-primary" onClick={submitProductData}>Criar Produto</button>
            </div>
          </form>
        ) : crudPages == "update" ? (
          <div>Update</div>
        ) : (
          <div>Delete</div>
        )}
      </div>
    </div>
  );
}
