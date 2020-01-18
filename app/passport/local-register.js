const PassportLocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const encryption = require('../utilities/encryption')

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    console.log(email)

    const user = {
        email: email.trim(),
        password: password.trim(),
        username: req.body.username.trim()
    }

    User
        .find({ email: email })
        .then(users => {
            if (users.length > 0) {
                return done('Този имейл вече съществува!')
            }

            user.salt = encryption.generateSalt()
            user.password = encryption.generateHashedPassword(user.salt, user.password)
            user.roles = []

            User
                .create(user)
                .then(() => {
                    return done(null)
                })
                .catch(() => {
                    return done('Нещо се обърка :( Проверете формата за грешки.')
                })
        })
})
