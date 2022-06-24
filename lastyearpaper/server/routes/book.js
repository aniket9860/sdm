const express=require('express');
const utils=require('../utils');
const db=require('../db');
const router=express.Router();
router.post('/addbook',(req,res)=>{ 
    const{book_id,book_title, publisher_name, author_name}=req.body;
    console.log(book_id);
    const statement=`insert into Book( book_id,book_title, publisher_name, author_name) values(?,?,?,?);`;
    db.Pool.query(statement,[book_id,book_title, publisher_name, author_name],(err,data)=>{
        res.send(utils.createResult(err,data));
    })
})
router.get('/getallbook', (req,res)=>{//to get all cars on home screen
    const statement=`select * from Book`;
    db.Pool.query(statement,(err,data)=>{
        res.send(utils.createResult(err,data));
    })
})
router.put('/updatebook/:book_id',(req,res)=>{ 
    const {book_id}=req.params;
    const{publisher_name, author_name}=req.body;
    const statement=`update Book set publisher_name=?, author_name=? where book_id=?;`;
    db.Pool.query(statement,[publisher_name, author_name,book_id],(err,data)=>{
        res.send(utils.createResult(err,data));
    })
})
module.exports=router;

router.delete('/deletebook/:book_id',(req,res)=>{ 
    const {book_id}=req.params;
    const statement=`delete from Book where book_id=?;`;
    db.Pool.query(statement,[book_id],(err,data)=>{
        res.send(utils.createResult(err,data));
    })
})