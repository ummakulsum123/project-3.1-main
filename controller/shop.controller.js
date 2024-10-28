const path=require("path")
const shopShow = async(req,res)=>{
    return res.sendFile(path.join(__dirname,"/../views/shop.html"))
}
module.exports={shopShow}