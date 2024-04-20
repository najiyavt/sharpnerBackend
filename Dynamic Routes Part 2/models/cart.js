const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart{
    static addProduct(id,productPrice){
        fs.readFile(p,(err,filrContent) => {
            let cart = {products:[],totalPrice:0 };
            if(!err){
                cart = JSON.parse(filrContent);

                const existingProductIndex = cart.products.findIndex(
                    prod => prod.id === id
                );
                const existingProduct = cart.products[existingProductIndex];
            
                let updateProduct ;
                if(existingProduct){
                    updateProduct={...existingProduct};
                    updateProduct.qty = updateProduct.qty+1;
                    cart.products = [...cart.products];
                    cart.products[existingProductIndex] = updateProduct
                }else{
                    updateProduct = {id:id,qty:1};
                    cart.products=[...cart.products,updateProduct];
                }
                cart.totalPrice = cart.totalPrice+productPrice;
                fs.writeFile(p,JSON.stringify(cart) , (err) => {
                    console.log(err)
                })
            }
        })
    }
}