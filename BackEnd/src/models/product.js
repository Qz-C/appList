const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AppSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // It indicates that this field is mandatory
    },
    description: {
        type : String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Storages the data which a new product is added
    },
});

AppSchema.plugin(mongoosePaginate);

mongoose.model('app', AppSchema); // Basically the command to register a model in the application 