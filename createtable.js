var mysqldb=require('mysql')
var connection=mysqldb.createConnection({
host:'localhost',
user:'root',
password:'',
port:3306,
database:'productdb'
})
connection.connect((error)=>{
    if(error){
        throw error
    }
    console.log("connected to database")
    createTableQuery="create table products(name varchar(65),description varchar(65),image_name varchar(65),id int(8) auto_increment,primary key(id))"
    connection.query(createTableQuery,(error,success)=>{
        if(error){
        throw error
        }
        console.log("table products created")
    })
})
