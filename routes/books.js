const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const axios=require('axios');

const fs=require('fs');


//let booksArray=require('../util/booksArray.json');

const imageStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }

});

const booksRouter=express.Router();

booksRouter.use(bodyParser.urlencoded({extended:true}));
booksRouter.use(multer({storage:imageStorage}).single('authorpic'));

booksRouter.get('/', async(req,res)=>{
    let booksArray=JSON.parse(fs.readFileSync('./util/booksArray.json'));
    res.render('books',{booksArray});
});
booksRouter.route('/addNewBook')
.get((req,res)=>{
    res.render('addNewBook');
})
.post((req,res)=>{
    console.log(req.file);
    const bookObject={};
    bookObject.name=req.body.bookName;
    bookObject.author=req.body.author;
    bookObject.genre=req.body.genre;
    bookObject.pic=req.file.filename;
    bookObject.about=req.body.about;

    let rawdata = fs.readFileSync('./util/booksArray.json');
    let books = JSON.parse(rawdata);
    books.push(bookObject);
    let booksJSON=JSON.stringify(books);
    fs.writeFileSync('./util/booksArray.json',booksJSON);

    

    res.redirect('/books');

})

booksRouter.route('/addNewAuthor')
.get((req,res)=>{
    res.render('addnewauthor');
})
.post((req,res)=>{
    console.log(req.file);
    const AuthObject={};
    AuthObject.name=req.body.AuthorName;
    AuthObject.pic=req.file.filename;
    AuthObject.works=req.body.works;
    AuthObject.about=req.body.about;

    let rawdata2 = fs.readFileSync('./util/authorsArray.json');
    let authors = JSON.parse(rawdata2);
    authors.push(AuthObject);
    let authorJSON=JSON.stringify(authors);
    fs.writeFileSync('./util/authorsArray.json',authorJSON);

    

    res.redirect('/authors');

})

booksRouter.get('/:index',(req,res)=>{
    let booksArray=JSON.parse(fs.readFileSync('./util/booksArray.json'));
    let index=req.params.index;
    res.render('singleBook',{book:booksArray[index]});
});


module.exports=booksRouter;