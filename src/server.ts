import express from 'express'
import { routes } from './routes'
import { sequelize } from './db/config'
import { startScraping } from './Webscraping'

const app = express()
const port = 3333

app.use(express.json())
app.use(routes)

sequelize.sync().then(() => console.log('Database is connected'))
// startScraping()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})