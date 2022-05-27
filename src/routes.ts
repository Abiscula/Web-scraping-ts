import express from 'express'

export const routes = express.Router()

routes.post('/bigboygames', (req, res) => {
    const { game_url } = req.body
    return res.status(200).send(`${game_url} adicionado ao alerta de preços`)
})