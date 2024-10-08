const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VocabSchema = new Schema(
    {
        english: {
            type: String,
            required: 'English word cannot be blank'
        },
        german: {
            type: String,
            default: ''
        },
        french: {
            type: String,
            default: ''
        },
    },
    { collection: 'vocab' }
);

module.exports = mongoose.model('Vocab', VocabSchema);
