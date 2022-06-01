import express from 'express'
import { routes } from './routes'
import { startScraping } from './Webscraping'

const app = express()
const port = 3333

app.use(express.json())
app.use(routes)

startScraping()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})