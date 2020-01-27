const mongoose = require('mongoose');
const moment = require('moment');

const eurosSchema = new mongoose.Schema({

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