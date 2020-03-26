const mongoose = require('mongoose');


//Schema 
const phenSchema = new mongoose.Schema({
    name:{
        type:String,
        default:'none',
        timestamps:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        default:true,
        minlength:8
    },
    username:{
        type:String,
        default:true,
        timestamps:true,
        minlength:8
    },
    password:{
        type:String,
        default:true,
        minlength:8
    },
    photo:{
        type:String,
        default:true,
    },
    country:{
        type:String,
        default:true,
        minlength:4
    },

})

module.exports = mongoose.model('Phen',phenSchema)