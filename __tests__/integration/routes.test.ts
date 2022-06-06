import request from 'supertest'
import { app }  from '../../src/server'

const reqObject = {
    "site": "Amazon",
    "gameName": "Mario Kart 8",
    "gameUrl": "https://www.amazon.com.br/Mario-Kart-8-Deluxe-Switch/dp/B01N1037CV/ref=sr_1_1?keywords=mario+kart+8&qid=1653966926&sprefix=%2Caps%2C164&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
    "gamePrice": 280.00
}

describe('Routes', () => {
    it('should return status 201 when API call is valid', async () => {
        const res = await request(app)
            .post('/game4buy')
            .send(reqObject)
        expect(res.statusCode).toEqual(201)

    })

    it('should return all expected object keys when API is called', async () => {
        const res = await request(app)
            .post('/game4buy')
            .send(reqObject)
        expect(Object.keys(res.body[0])).toContain(Object.keys(reqObject).shift())
    })
})
