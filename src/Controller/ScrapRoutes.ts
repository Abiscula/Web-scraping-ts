import { Request, Response } from 'express';
import { Sites } from '../db/model/Sites';


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


    static async createNewGame({site, gameName, gameUrl, gamePrice}: any) {
        await Sites.create({ site: site, gameName: gameName,  gameUrl: gameUrl, gamePrice: gamePrice })
    }


    static async updateGame({site, gameName, gameUrl, gamePrice}: any) {
        await Sites.update(
            { gameName: gameName,  gameUrl: gameUrl, gamePrice: gamePrice },
            { where: { site: site } })
    }


}