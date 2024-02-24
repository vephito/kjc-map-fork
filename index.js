const express = require("express")
const app = express()
const PORT = 3000

app.get("/",(req,res) =>{
    res.send("This is a Get Request")
})
app.post("/",(req,res) =>{
    const body = req.body()
    const {name,email} = json(body)
    res.status(200).(json(name)
})
app.listen(PORT,() =>{
    console.log("Server running on port {PORT})
})


console.log("Hello world from Java Script")
