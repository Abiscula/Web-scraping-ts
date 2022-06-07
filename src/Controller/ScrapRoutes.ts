import { Request, Response } from 'express';
import { Sites } from '../db/model/Sites';

interface attributes {
    site: string,
    gameName: string,
    gameUrl: string,
    gamePrice: number
}

export class ScrapRoutes {

    static async gameToSearch(req: Request, res: Response) {
        const { site } = req.body
        try {
            const db = await Sites.findAll({ where: {site: site}})
            if(db.length === 0) {
                ScrapRoutes.createNewGame({...req.body})
            } else {
                ScrapRoutes.updateGame({...req.body})
            }

            return res.status(201).json(db)
        }catch(err) {
            console.log(err)
            return res.status(400).json(err)
        }
    }


    static async createNewGame({site, gameName, gameUrl, gamePrice}: attributes) {
        await Sites.create({ site: site, gameName: gameName,  gameUrl: gameUrl, gamePrice: gamePrice })
    }


    static async updateGame({site, gameName, gameUrl, gamePrice}: attributes) {
        await Sites.update(
            { gameName: gameName,  gameUrl: gameUrl, gamePrice: gamePrice },
            { where: { site: site } })
    }


}