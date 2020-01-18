require('dotenv').config()

const path = require('path')

let dbHost = process.env.DB_HOST || 'localhost'
let dbPort = process.env.DB_PORT || 27017
let dbName = process.env.DB_NAME || 'db'
let dbUser = process.env.DB_USER || ''
let dbPassword = process.env.DB_PASSWORD || ''

const settings = module.exports = {
    // rootPath: path.normalize(path.join(__dirname, './')),
    rootPath: path.normalize(path.join('./')),
    appName: process.env.APP_NAME || 'Express App',
    appPort: process.env.APP_PORT || 5000,
    db: 'mongodb://' + dbHost + ':' + dbPort + '/' + dbName
}
