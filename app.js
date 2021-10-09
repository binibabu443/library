const express=require('express');
const port = process.env.PORT || 2000;

const loginRouter=require('./routes/login');
const signupRouter=require('./routes/signup');
const booksRouter=require('./routes/books');
const authorsRouter=require('./routes/authors');

const app=express();

app.set('view engine','ejs');
app.use(express.static('public/js'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));


//main route
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/booksjson',(req,res)=>{
    res.sendFile(__dirname+'/util/booksArray.json');
})
app.use('/logIn',loginRouter);
app.use('/signUp',signupRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);



// app serving in a perticular port
app.listen(port,()=>{
    console.log('app serving at' +port);
});