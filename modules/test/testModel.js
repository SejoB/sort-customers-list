const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String
})

const TestModel = mongoose.model('test', TestSchema, 'test')

module.exports = TestModel
