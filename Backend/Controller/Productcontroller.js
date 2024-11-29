const Productmodel = require("../Model/Productmodel");
 const postProduct = async (req, res) => {
  // try {
    const { Productname, Productprice, Productimage, Productdescription } =
      req.body;
    if (!Productname && !Productprice && !Productimage && !Productdescription) {
      res.status(408).json({ message: "All field are Required" });
    } else {
      const insertproduct = await Productmodel.create({
        Productname,
        Productprice,
        Productimage,
        Productdescription,
      });
      console.log("insertproduct", insertproduct);
      res.status(200).json({ message: "data added sucsessfully" });
    }
  // } catch (e) {
  //   res.status(500).json({ message: "unable to add" });
  // }
};
const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Productmodel.findByIdAndDelete({
      _id: req.query.id,
    });
    console.log("deleteProduct", deleteProduct);
    res.status(200).json({ message: "Product succssefully delete" });
  } catch (e) {
    res.status(400).json({ message: "error shown" });
  }
};
 const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Productmodel.findById({ _id: id });
    // console.log("req.user._id",req.user._id)
    res.json({ products: data });
  } catch (e) {
    res.json({ message: "unable to show" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updateProduct = await Productmodel.findByIdAndUpdate(
      req.query.id,
      req.body
    );
    console.log("updateProduct", updateProduct);
    res.status(200).json({ message: "Succsessfully update product" });
  } catch (e) {
    console.log("eeee", e);
    res.status(400).json({ message: "Something went to wrong!" });
  }
};
const allproduct = async (req, res) => {
  try {
    const { page } = req.query;
    const itemsperpage = 5;
    const currentpage = Number(page) || 1;
    const totalSkipitem = itemsperpage * (currentpage - 1);
    const totalproduct = await Productmodel.countDocuments();
    const getAllproduct = await Productmodel.find({})
      .limit(itemsperpage)
      .skip(totalSkipitem);
    if (getAllproduct) {
      res.status(201).json({ getAllproduct, totalproduct, itemsperpage });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went to wrong!" });
  }
};
module.exports = {
  postProduct,
  deleteProduct,
  singleProduct,
  updateProduct,
  allproduct,
};
