const mongoose = require('mongoose');

const db=async(req,res)=>{
    console.log("process.env.MONGO_URLprocess.env.MONGO_URL",process.env.MONGO_URL)
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected successfully")
    } catch (error) {
        console.log("database not connected succsesfully")
    }
}
module.exports=db