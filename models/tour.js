const mongoose =require('mongoose');
const tour=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const tourModel=mongoose.model('tour',tour);
module.exports=tourModel;