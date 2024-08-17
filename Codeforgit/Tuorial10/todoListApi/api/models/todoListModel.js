const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        dafault: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['Pending', 'In Progress', 'Completed']
        }],
        default: 'Pending'
    },
});

module.exports = mongoose.model('Tasks', TaskSchema);