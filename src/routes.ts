import express from 'express'
import { ScrapRoutes } from './Controller/ScrapRoutes'

export const routes = express.Router()

routes.post('/bigboygames', ScrapRoutes.gameToSearch)