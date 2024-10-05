const pool = require("../utils/database");

module.exports = class Products {
    constructor(id, productname, price, image) {
        this.id = id;
        this.productname = productname;
        this.price = price;
        this.image = image;
    }

    // Fetch all products from the database
    static fetchProducts() {
        return pool.execute("SELECT * FROM products");
    }

    static fetchProductsById(id) {
        return pool.execute("SELECT * FROM products WHERE id =?", [id]);
    }

    static deleteProductById(id) {
        return pool.execute("DELETE FROM products WHERE id=?", [id]);
    }

    // Insert a new product into the database
    postData() {
        return pool.execute(
            "INSERT INTO products (productname, price, image) VALUES (?, ?, ?)", 
            [this.productname, this.price, this.image]
        );
    }

    // Edit existing product data
    editData() {
        return pool.execute(
            "UPDATE products SET productname=?, price=?, img=? WHERE id=?",
            [this.productname, this.price, this.image, this.id]
        );
    }
}
