const mongoose=require('mongoose');
const dns=require('dns');
dns.setServers(['8.8.8.8','1.1.1.1']);

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected");
    }catch(err){
        console.error("db connection error:",err)
    }
}
module.exports=connectDB;