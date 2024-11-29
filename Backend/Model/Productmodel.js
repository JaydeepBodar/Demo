const mongoose=require("mongoose")
const productModel=new mongoose.Schema({
    Productname:{
        type:String,
        required:true
    },
    Productprice:{
        type:Number,
        required:true
    },
    Productimage:{
        type:String,
        required:true
    },
    Productdescription:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Product",productModel)