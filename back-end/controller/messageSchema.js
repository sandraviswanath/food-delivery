const mongoose =require('mongoose');


const messageSchema = new mongoose.Schema(
    {
    sender :{type:mongoose.Schema.Types.ObjectId,ref:"fooduser"},
    content:{type:String,trim:true},
    chat:{type:mongoose.Schema.Types.ObjectId,ref:"chat"},
    },
    {
        timestamps:true,
    }
)
const message = mongoose.model('message', messageSchema);
module.exports = message;