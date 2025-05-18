const products = require("../data/product")
const categories = require("../data/category")

function addProduct(req, res) {
  console.log("----", req.body, "-----");
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    instock: true,
  };
  products.push(newProduct);
  res.send({ message: "product added successfully", success: true });
}

function getAllProducts(req, res) {
  res.status(200).send({ products: products, success: true });
}

function getProductsById(req, res) {
  const id = req.params.ID;
  const prod = products.filter((p) => p.id == id);
  res.status(200).send({ products: prod, success: true });
}

function updateProduct(req, res) {
  const ID = req.params.ID;
  index = products.findIndex((p) => p.id == ID);
  if (index == -1) {
    res.status(200).send({ message: "Product not found", success: false });
  }
  products[index].price = req.body.price;
  res.status(200).send({ message: "product updated", success: true });
}

function deleteProduct(req, res) {
  const ID = req.params.ID;
  index = products.findIndex((p) => p.id == ID);
  if (index == -1) {
    res.status(200).send({ message: "products Not Found", success: false });
  }
  products.splice(index, 1);
  res.status(200).send({ message: "products Deleted", success: true });
}

module.exports = {
  addProduct,
  getAllProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
};
