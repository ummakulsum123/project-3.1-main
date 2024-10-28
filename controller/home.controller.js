
const path = require("path")
const homeShow = async(req,res)=>{
   // console.log(req.url)
   // console.log(__dirname)
   // console.log(path.join(__dirname,"/../views/index.html"))
    return res.sendFile(path.join(__dirname,"/../views/index.html"))
}

module.exports = {homeShow}