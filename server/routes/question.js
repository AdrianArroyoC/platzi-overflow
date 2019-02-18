import express from 'express'
import { required } from '../middleware'
import { question } from '../db-api'
import { handleError } from '../utils'

const app = express.Router()

// GET /api/questions
app.get('/', async (req, res) => {
    try {
        const questions = await question.findAll()
        // setTimeout(() => {
        res.status(200).json(questions)
        // }, 2000)
    } catch (err) {
        handleError(err, res)
    }
})

// GET /api/questions/:id
app.get('/:id', async (req, res) => {
    /*const { id } = req.params
    const q = questions.find(({ _id }) => _id === +id)*/
    try {
        const q = await question.findById(req.params.id)
        res.status(200).json(q)
    } catch (err) {
        handleError(err, res)
    }
})

// POST /api/questions
app.post('/', required, (req, res) => {
    const question = req.body
    question._id = +new Date()
    question.user = req.user 
    /*{
        email: 'adrianarroyoc@gmail.com',
        password: '123456',
        firstName: 'Adrian',
        lastName: 'Arroyo'
    }*/
    question.createdAt = new Date()
    question.answers = []
    questions.push(question)
    res.status(201).json(question)
})

app.post('/:id/answers', required, (req, res) => {
    const answer = req.body
    const q = req.question
    answer.createdAt = new Date()
    answer.user = req.user
    q.answers.push(answer)
    res.status(201).json(answer)
})

export default app