const mongoose=require('mongoose');

const urlSchema=new mongoose.Schema({
    urlorg:String,
    urlnew:{
        type:String,
        unique:true
    },
    clicks:{type:Number,default:0}},
   { timestamps:true

})

const urlModel=mongoose.model("url",urlSchema);
module.exports=urlModel;