import express from 'express'
import {
    required,
    questionMiddleware,
    questionsMiddleware
} from '../middleware'

const app = express.Router()

// GET /api/questions
app.get('/', questionsMiddleware, (req, res) => {
    // setTimeout(() => {
        res.status(200).json(req.questions)
    // }, 2000)
})

// GET /api/questions/:id
app.get('/:id', questionMiddleware, (req, res) => {
    /*const { id } = req.params
    const q = questions.find(({ _id }) => _id === +id)*/
    res.status(200).json(req.question)
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

app.post('/:id/answers', questionMiddleware, required, (req, res) => {
    const answer = req.body
    const q = req.question
    answer.createdAt = new Date()
    answer.user = req.user
    q.answers.push(answer)
    res.status(201).json(answer)
})

export default app