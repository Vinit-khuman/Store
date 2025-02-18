const express = require('express');
const app = express();
const home = require("./routes/home");
const addProduct = require("./routes/addProduct")
const editProduct = require("./routes/editProduct");
const deleteProduct = require("./routes/deleteProduct");
const userAuth = require('./routes/userAuth');


app.set('view engine', 'ejs');
app.set('views', 'views'); 

app.use('/', home);
app.use('/add-product', addProduct);
app.use('/edit-product',editProduct);
app.use('/delete-product',deleteProduct);
app.use('/',userAuth)

app.use(express.static(__dirname));

const server= app.listen(3000,()=>{
    console.log('Server is Running!!!');
})