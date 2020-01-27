//It will handle the operations of an specific module

const mongoose = require('mongoose');
const product = mongoose.model('product');

module.exports = {
    async index(req, res) {
        //on page destructuration is used, and one standard value is set to page || query is used only on get mode
        
        const { page = 1 } = req.query; 

        //show all the products page by page -- the first param on .paginate is used to filter
        const products = await product.paginate({} , { page , limit: 10 } );
 
        return res.json(products);
    },

    async store(req, res){
        const products = await product.create(req.body);

        return res.json(products);
    },
    async show(req, res){
        const products = await product.findById(req.params.id);

        return res.json(products);
    },
    async update(req, res){
        //Search for a unique product (req.params.id) and update this product with the body's information (req.body)
        //{new : true} return to products the new value
        const products = await product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(products);
    },

    async destroy(req, res){
        await product.findByIdAndRemove(req.params.id);

        //return a success message without content
        return res.send();
    },

};