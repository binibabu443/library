const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const axios=require('axios');

const fs=require('fs');

const imageStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }

});

// const authorsArray=require('../util/authorsArray');


const authorsRouter=express.Router();

authorsRouter.use(bodyParser.urlencoded({extended:true}));
authorsRouter.use(multer({storage:imageStorage}).single('authorpic'));

authorsRouter.get('/',(req,res)=>{
    let authorsArray=JSON.parse(fs.readFileSync('./util/authorsArray.json'));
    res.render('authors',{authorsArray});
});

module.exports=authorsRouter;