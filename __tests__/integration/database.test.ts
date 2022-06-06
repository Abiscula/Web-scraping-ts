
import { startDB } from "../../src/db/config"

describe('Database', () => {
    it('should sync all models to the database when connection is valid', async () => {
        const db = await startDB()
        expect(db).toBe(200)
    })
})


