const mongoose = require('moongose');
const moment = require('moment');

const dolaresSchema = new mongoose.Schema({

    ticket: {
        type: Number,
        default: 0
    },

    rfc: {
        type: String,
        default: ''
    },

    piloto: {
        type: String,
        default: ''
    },
})