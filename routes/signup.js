const express=require('express');


const signupRouter=express.Router();

signupRouter.get('/',(req,res)=>{
    res.render('signUp');
});

module.exports=signupRouter;