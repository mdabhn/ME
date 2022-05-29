import express from 'express'
import env from 'dotenv'

const app = express()
env.config()

app.use(express.json())

app.get('/', (_, res) => {
  return res.send('⚡⚡⚡')
})

const PORT = process.env.PORT || 8888

app.listen(PORT)
