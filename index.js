// 1.importing the express
const express = require('express')
const employeeModel= require('./model')

// 2.initialise express
const app = new express()

//3 adding middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//3.api creation
app.get('/',(req,res)=>{
    res.send("messege from server")
    
})

app.get('/trial',(req,res)=>{
    res.send("hlo")
})

app.get('/data',(req,res)=>{
    res.json({"Name":"Nooranazer","age":18})
})
//api to add data to db
app.post('/add',async(req,res)=>{
    const result =  await new employeeModel(req.body)
    result.save()
    res.send("data added")
})

app.post('/postdata',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})

// api to view data from db

app.get('/view',async(req,res)=>{
    let result= await employeeModel.find();
    res.json(result);
})

//4.setting port
app.listen(8080,()=>{
    console.log("port 8080 is up and running")
})