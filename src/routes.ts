import express from 'express'

export const routes = express.Router()

routes.post('/game4buy', (req, res) => {
    const { game } = req.body
    return res.status(200).send(`Jogo ${game} adicionado ao alerta de preços`)
})