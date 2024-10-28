const path= require("path")
const singleproductShow = async(req,res)=>{
    return res.sendFile(path.join(__dirname,"/../views/singleproduct.html")) 
}
module.exports = {singleproductShow}
