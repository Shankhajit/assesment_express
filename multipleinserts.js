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

var multipleInsert="insert into products (name,description,image_name) values ?"
var records=[
    ['haier','good','h.jpg'],
    ['samsung','nice','s.jpg'],
    ['whirlpool','supercool','w.jpg']
]

connection.query(multipleInsert,[records],(error,success)=>{
    if(error)
    {
        throw error
    }
    console.log(success)
})
})