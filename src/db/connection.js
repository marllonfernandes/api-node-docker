const mongoose = require('mongoose')
require('dotenv').config()
const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env
const options = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
}

const connectionString = DB_USER && DB_PASS ? `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}` : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

console.log(`connectionStringDB: ${connectionString}`)

mongoose.connect(connectionString, options)
    .then(() => {
        console.log('MongoDb is connected!')
    }).catch((error) => {
        console.log(error)
    })

mongoose.Promise = global.Promise

const user = mongoose.Schema({
    name: { type: String, default: '', required: false },
    email: { type: String, default: '', require: false },
}, { timestamps: true })


exports.User = mongoose.model("User", user)

exports.mongoose = mongoose