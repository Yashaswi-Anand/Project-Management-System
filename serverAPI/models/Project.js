const mongoose = require('mongoose')
 
const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    issueDate:{
        type: String
    }
},{timeStamp: true})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project
