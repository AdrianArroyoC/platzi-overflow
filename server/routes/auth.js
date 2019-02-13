import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'

const app = express.Router()
const debug = new Debug('platzi-overflow:auth')

const secret = 'miclavesecreta'

const users = [
    {
        email: 'adrianarroyoc@gmail.com',
        password: '123456',
        firstName: 'Adrian',
        lastName: 'Arroyo',
        _id: 123
    }
]

const findUserByEmail = e => users.find(({ email }) => email === e)

function comparePasswords(providedPassword, userPassword) {
    return providedPassword === userPassword
}

app.post('/signin', (req, res, next) => {
    const { email, password } = req.body
    const user = findUserByEmail(email)
    if (!user) {
        debug(`User with email ${email} not found`)
        return handleLoginFailed(res)
    }
    if (!comparePasswords(password, user.password)) {
        debug(`Password ${password} do not match`)
        return handleLoginFailed(res)
    }
    const token = jwt.sign({ user }, secret, { expiresIn: 86400 })
    res.status(200).json({
        message: 'Login succeded',
        token,
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    })
})

function handleLoginFailed(res) {
    res.status(401).json({
        message: 'Login failed',
        error: 'Email don\'t match'
    })
}

export default app