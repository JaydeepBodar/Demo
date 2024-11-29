const express=require("express")
const app=express()
const dotenv=require("dotenv")
const cors=require("cors")
const db=require("./utils/db")
const product=require("./Router/Productrouter")
dotenv.config()
db()
app.use(cors())
app.use(express.json())
app.use("/product",product)
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log("Port are not connected")
    }else{
        console.log(`Port Successfully connected on ${process.env.PORT}`)
    }
})
