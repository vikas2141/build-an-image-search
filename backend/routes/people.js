const express=require("express")
const router=express.Router()
const mySqlConnection=require("./../connection")

router.get("/image",(req,res)=>{
    console.log('this is the req:',req)
    console.log('req.params.pageUrls',req.query.pageUrls)
    let query=`select* from img_tbl where pageUrls='${req.query.pageUrls}'`
    mySqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.send(rows)
        }else{
            console.log(err)
        }
    })
})






module.exports= router;
