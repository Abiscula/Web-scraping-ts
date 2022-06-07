
import { ScrapRoutes } from "../../src/Controller/ScrapRoutes"
import { startDB } from "../../src/db/config"
import { findGameInDB } from "../../src/utils/findGameInDb"

describe('Database', () => {
    it('should sync all models to the database when connection is valid', async () => {
        const db = await startDB()
        expect(db).toBe(200)
    })

    it('should catch game price in database when connection is valid', async () => {
        const gamePrice = findGameInDB('Amazon')
        expect(gamePrice).toBe(gamePrice)
    })

    it('should create game data in database when attributes is valid', async () => {
        const createData = ScrapRoutes
        createData.createNewGame({
            site: 'Amazon', 
            gameName: 'Mario Kart 8', 
            gameUrl: 'www.amazonteste.com', 
            gamePrice: 280
        })
        expect(createData).toThrow()
    })
})


