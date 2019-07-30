var mysqldb=require('mysql')
var connection=mysqldb.createConnection({
host:'localhost',
user:'root',
password:'',
port:3306,


})

connection.connect((error)=>{
    if(error)
    {
        throw error
    }
    console.log("Connected to My SQL Database")
    var createDbQuery="create database ProductDB"
    connection.query(createDbQuery,(error,success)=>{
        if(error)
        {
            throw error
        }
        console.log("Database Created")
    })

})