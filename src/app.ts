import express from 'express'
import { v1Route } from './routes/index'
import { logger } from './utils/logger'

// -------------------firing express app
export const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/v1', v1Route)

// --------------------Listen
const PORT = process.env.PORT ?? 5000
export const server = app.listen(PORT, () => {
  logger.info(`Server running on PORT ${PORT}`)
})
