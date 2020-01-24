const mongoose = require('mongoose')

// mongoose.connect('mongodb://user:sejo1981@ds227171.mlab.com:27171/users')

const { DB_HOST, DB_PORT, DB_NAME } = process.env
const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4
}

const connect = async () => {
    try {
        await mongoose.connect(uri, options)
        console.log('Connected to Mongo DB')
    } catch (error) {
        console.error(error)
    }
}
module.exports = { connect }
