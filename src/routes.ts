import express from 'express'
import { DataUrl } from './Controller/DataUrl'

export const routes = express.Router()

routes.post('/bigboygames', DataUrl.getBigBoyUrl)