const mysql=require("mySql");

var mySqlConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"images",
    multipleStatements:true
})
mySqlConnection.connect((err)=>{
    if(!err){
        console.log("connected")
    }else{
        console.log("not connected")
    }
})

module.exports=mySqlConnection