import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { startDB } from './db/config'
import { startScraping } from './Webscraping'

export const app = express()
const port = 3333

app.use(express.json())
app.use(cors())
app.use(routes)


startDB()
startScraping()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})