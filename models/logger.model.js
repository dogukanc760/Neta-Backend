const mongoose = require('mongoose');


const LoggerSchema = new mongoose.Schema({
   logUserId:{type:String, default:''},
   logTitle: { type: String, default:''},
   logDescription: { type: String, default:'' },
   logLevel: { type: String, default:'' },
}, {timestamps:true});

const Logger = mongoose.model('Logger', LoggerSchema);

module.exports = Logger;