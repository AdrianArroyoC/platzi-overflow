import express from 'express'
import { question } from './routes'

const app = express()

//app.get('/', (req, res) => res.send('Hola desde express!'))
app.use('/api/questions', question)

export default app