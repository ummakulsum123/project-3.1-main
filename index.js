const express = require("express")
const path = require("path")
const app = express()
const router = require("./routes/api.js")
app.use((req,res,next)=>{
    console.log(req.url)
    next()
})

console.log(path.join(__dirname,"public"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.use("/api",router);
app.listen(3000,()=>{
    console.log("server strated on port 3000")
})
//node --watch index (for run main file) 