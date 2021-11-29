import express from 'express'
import '../infrastructure/databases/typeorm'
import { router } from './routes'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)

export { app }
