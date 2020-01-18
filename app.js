let env = process.env.NODE_ENV || 'development'

const settings = require('./app/config/settings')
// let settings = require('./config/settings')[env]

const express = require('express')

const app = express()


require('./app/config/database')(settings)
require('./app/config/express')(app)
require('./app/config/routes')(app)
require('./app/config/passport')()


app.listen(settings.appPort, () => {
    console.log(`Server running on port ${settings.appPort}`)
})