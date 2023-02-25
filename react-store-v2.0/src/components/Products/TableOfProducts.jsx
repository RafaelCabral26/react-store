import React, {useEffect} from "react";
import { ProductsModal } from "./UpdateProductsModal";
import http from "../../services/axios";
export const TableOfProducts = (props) => {
  const [listOfProducts, setListOfProducts] = React.useState([]);
  const [selectedProductModal, setSelectedProductModal] = React.useState({});
  useEffect(() => {
    http
      .get("/products_list")
      .then((res) => {
        console.log("Render useEffect products_list request");
        setListOfProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleEditProductsModal(id) {
    const selected = listOfProducts.filter((ele) => {
      if (ele._id.$oid == id) {
        return ele;
      }
    });
    setSelectedProductModal({ show: !selectedProductModal.show, product: selected[0] });
  }
  useEffect(() => {
    console.log("Opa", selectedProductModal);
  }, [selectedProductModal]);
  return (
    <div className="col-start-5 my-20 relative ">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Editar</th>
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
                <th key={e.name + "1"}>
                  <button
                    className="link text-teal-400"
                    onClick={() => {
                      handleEditProductsModal(e._id.$oid);
                    }}
                  >
                    Editar
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedProductModal.show == true ? <ProductsModal selectedProductModal={selectedProductModal}></ProductsModal> : null}
    </div>
  );
};
