const mongoose = require('mongoose');
const moment = require('moment');

const portalpagosSchema = new mongoose.Schema({

    peso:{
        type: Number,

        default: 0
    },

    euro:{
        type: Number,
 
        default: 20.8
    },

    dolar:{
        type: Number,

        default: 19.25
    },

})