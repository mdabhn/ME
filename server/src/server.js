import express from 'express'
import env from 'dotenv'
import AuthRoutes from './Routes/auth/Auth.routes.js'

const app = express()
env.config()

app.use(express.json())

app.get('/', (_, res) => {
  return res.send('⚡⚡⚡')
})

/**
 * ↓↓↓ @Root User Authentication ↓↓↓
 */

app.use(process.env.API_AUTH_PREFIX, AuthRoutes)

const PORT = process.env.PORT || 8888

app.listen(PORT)
