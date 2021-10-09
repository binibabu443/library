const express=require('express');


const loginRouter=express.Router();

loginRouter.get('/',(req,res)=>{
    res.render('logIn');
});

module.exports=loginRouter;