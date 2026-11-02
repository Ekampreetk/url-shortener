const urlModel = require("../models/url.model");
const { nanoid } = require("nanoid");
async function createshorturl(req,res){
    try{
        const{urlorg}=req.body;
        if(!urlorg){
            return res.status(400).json({
                message:"original url is required"
            })
        }
        const shortcode=nanoid(7);
        const newurl=await urlModel.create({
            urlorg,
            urlnew:shortcode
        });
        res.status(201).json({
            message:"short url created",
            shorturl:`http://localhost:3000/${shortcode}`,
            data:newurl
        });
    }
    catch(err){
        console.error("error creating url:",err);
        res.status(500).json({
            message:"something went wrong"
        })
    }
}
async function redirectToOriginal(req,res){
    try{
        const {code}=req.params;
        const url=await urlModel.findOne({urlnew:code});
        if (!url) {
            return res.status(404).json({
                message: "Short URL not found"
            });
        }
        url.clicks=url.clicks+1;
        await url.save();
        res.redirect(url.urlorg);
    }
    catch (err) {
        console.error("Error redirecting:", err);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}
module.exports = { createshorturl ,redirectToOriginal};