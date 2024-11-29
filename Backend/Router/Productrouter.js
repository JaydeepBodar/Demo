const productrouter = require("express").Router();
const {
  postProduct,
  singleProduct,
  deleteProduct,
  updateProduct,
  allproduct
} = require("../Controller/Productcontroller");
productrouter
  .get("/singleproduct/:id", singleProduct)
  .post("/createproduct", postProduct)
  .delete("/deleteproduct", deleteProduct)
  .put("/updateproduct", updateProduct)
  .get("/allproduct", allproduct);

module.exports = productrouter;
