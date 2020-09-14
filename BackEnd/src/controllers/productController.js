//It will handle the operations of an specific module

const mongoose = require('mongoose');
const app = mongoose.model('app');

module.exports = {
    async index(req, res) {
        //on page destructuration is used, and one standard value is set to page || query is used only on get mode
        
        const { page = 1 } = req.query; 

        //show all the apps page by page -- the first param on .paginate is used to filter
        const apps = await app.paginate({} , { page , limit: 10 } );
 
        return res.json(apps);
    },

    async store(req, res){
        const apps = await app.create(req.body);

        return res.json(apps);
    },
    async show(req, res){
        const apps = await app.findById(req.params.id);

        return res.json(apps);
    },
    async update(req, res){
        //Search for a unique app (req.params.id) and update this app with the body's information (req.body)
        //{new : true} return to apps the new value
        const apps = await app.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(apps);
    },

    async delete(req, res){
        await app.findByIdAndDelete(req.params.id);

        //return a success message without content
        return res.send();
    },
    async search(req, res){

        const title = req.params.title;

        const apps = await app.find({title: { $regex: `${title}`}}).limit(10).exec();
        
        return res.json(apps);
    }

};