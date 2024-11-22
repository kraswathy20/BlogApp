const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type : String,
        required : true,
        unique: true
    },
    desc : {
        type : String,
        required : true
    },
    categories : {
        type : Array,
        required : false
    },
    photo : {
        type : String,
        required : false
    },
    username : {
        type : String,
        required : true
    }
},
{timestamps : true}
);

module.exports = mongoose.model('Post', PostSchema);