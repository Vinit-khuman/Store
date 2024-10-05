const products =[
    {
        id:1,
        productname : 'Apple',
        price :20,
        img : "apples.jpg"
    },
    {
        id:2,
        productname : 'Banana',
        price :20,
        img : "bananas.jpg"
    },
    {
        id:3,
        productname : 'Orange',
        price :20,
        img : "orange.jpg"
    },
    {
        id:4,
        productname : 'Pineapple',
        price :20,
        img : "pineapple.jpg"
    },
    {
        id:5,
        productname : 'Strawberry',
        price :20,
        img : "strawberry.jpg"
    }
]
const Products = require('../modals/products')

exports.renderProducts = (req,res)=>{
    Products.fetchProducts()
    .then(([rows,fieldData])=>{
        res.render(
            "home",
            {
                products:rows
            });
    })

}
exports.renderAddProduct=(req,res)=>{
    res.render('add-product');
}

exports.postAddProduct=(req,res)=>{
    const {productname, price, image} = req.body;

    if (!productname || !price || !image) {
        return res.status(400).send('All fields are required.');
    }

    const products = new Products(null,productname,price, image);

    products.postData().then(()=>{
        res.redirect('/');
    })
    
}

exports.renderEditProduct=(req,res)=>{
    Products.fetchProductsById(req.params.id)
    .then(([[productData], fieldData])=>{
        res.render(
            "edit-product",
            {
                product: productData
            }
        )
    })
}

exports.editProduct = (req,res)=>{
    const {productname, price, image} = req.body;
    const id = req.params.id;

    const products = new Products(id,productname,price,image);

    products.editData().then(()=>{
        res.redirect('/');
    })
}

exports.deleteProduct = (req, res) => {
    Products.deleteProductById(req.params.id)
        .then(() => {
            res.redirect('/');
        })
};
