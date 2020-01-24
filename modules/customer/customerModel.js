const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    Id: String,
    CompanyName: { type: String, required: [true, 'Company name is important'], unique: true },
    ContactName: { type: String, required: [true, 'Name is important'] },
    ContactTitle: String,
    Address: { type: String, required: [true, 'Adress is important'] },
    City: { type: String, required: [true, 'City is important'] },
    PostalCode: { type: String, required: [true, 'Postal code is important'] },
    Country: { type: String, required: [true, 'Country is important'] },
    Phone: String
})
const CustomerModel = mongoose.model('customers', CustomerSchema)

module.exports = CustomerModel
