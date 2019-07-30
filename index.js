var express=require('express')
var mysql=require('mysql')
var bodyparser=require('body-parser')
var corss=require('cors')
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ProductDB',
    port:3306

})
connection.connect((error)=>{
    if(error)
    {
        throw error
    }
    console.log("Connected to ProductDb database")
})
var expressApp=express()

expressApp.use(bodyparser.json())
expressApp.use(corss())
expressApp.get('/all',(req,res)=>{
    var qry="select * from products"
    connection.query(qry,(error,success)=>{
        if(error)
        {
            throw error
        }
        console.log(JSON.stringify(success))
        res.send(JSON.stringify(success))
        res.end()
    })
})
expressApp.listen(1400)