const ProductModel = require("../models/ProductModel");
function mountProduct(requestBody) {
  const { name, price, description, group, photo } = requestBody;
  const product = { name, price, description, group, photo }
  return product
}





module.exports = { mountProduct}
